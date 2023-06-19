"use client";

import React, { useState } from "react";
import { MainTextInput } from "../Inputs/MainTextInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ImageUpload } from "../Upload/ImageUpload";
import { MainTextArea } from "../Inputs/MainTextarea";
import { CheckBoxDropdown } from "../Dropdown/CheckBoxDropdown";
import { toast } from "react-hot-toast";
import { CustomButton } from "../Buttons";
import axios from "axios";
import { tag } from "@prisma/client";
import { MainFileUploadInput } from "../Inputs/MainFileUploadInput";
import { S3 } from "aws-sdk";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { useMotionValue } from "framer-motion";
import "dotenv/config";

interface Props {
  tags: tag[];
}

export const s3 = new S3({
  accessKeyId: process.env.AWS_Access_key,
  secretAccessKey: process.env.AWS_Secret_Access_Key,
  region: process.env.AWS_Region,
});

export const AdminAddSerial = ({ tags }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const progress = useMotionValue(0);
  const [upload, setUpload] = useState<S3.ManagedUpload | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      description: "",
      serialBannerBig: "",
      serialBannerSmall: "",
      imbdRating: 0,
      tags: [],
      serieTitle:'',
      serieDescription:'',
      serie:'',
      imbdId:''
    },
  });
  const imageBig = watch("serialBannerBig");
  const imageSmall = watch("serialBannerSmall");
  const formtags = watch("tags");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const addToTags = (tag: string) => {
    if(!isLoading){

      if (formtags.includes(tag)) {
        setCustomValue(
          "tags",
          formtags.filter((singleTag: string) => singleTag !== tag)
          );
        } else {
          if (formtags.length < 5) {
            setCustomValue("tags", [...formtags, tag]);
          } else {
            toast.error("Cant attach more than 5 tags");
          }
        }
      }
  };

  const onSubmit = async (data: FieldValues) => {
    if (!isLoading) {
      if (formtags.length === 0) {
        return toast.error("At least one tag is required");
      }
      if (data.serialBannerBig.length <= 0) {
        return toast.error("Big Banner is required");
      }
      if (data.serialBannerSmall.length <= 0) {
        return toast.error("Small Banner is required");
      }

      setIsLoading(true);

      axios
        .post(
          "/api/Serial/addSerial",
          {
            ...data,
          },
          {}
        )
        .then(async (res) => {
          const params = {
            Bucket: "saintstreammovies",
            Key: `series/${res.data.id}.mp4`,
            Body: data.serie[0],
            ContentType: "video/mp4",
          };

          try {
            const upload = s3.upload(params);
            setUpload(upload);
            upload.on("httpUploadProgress", (p) => {
              progress.set(p.loaded / p.total);
              if (p.loaded === p.total) {
                setUpload(null);
              }
            });
            await upload.promise();
            toast.success(res.data.message);
            reset();
          } catch (err) {
            toast.error("Something wrong happened");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.messge);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };
  return (
    <section className="w-full pt-[150px] flex flex-col gap-[60px]">
      <section className="w-full flex flex-col gap-[30px]">
        <h1 className="font-bold md:text-[30px] text-[24px] text-white">
          Add a Serial
        </h1>
        <div className="flex justify-between gap-x-[50px] gap-y-[30px] sm:flex-nowrap flex-wrap">
          <MainTextInput
            id="title"
            label="Title"
            placeholder="title"
            register={register}
            errors={errors}
            required
            disabled={isLoading}
          />
        </div>

        <div className="w-full flex flex-col gap-[30px]">
          <div className="flex justify-between gap-x-[50px] gap-y-[30px] sm:flex-nowrap flex-wrap">
            <MainTextInput
              id="imbdRating"
              label="Imbd Rating"
              type="number"
              placeholder="Rating"
              register={register}
              errors={errors}
              required
              disabled={isLoading}
            />
             <MainTextInput
                        id='imbdId'
                        label='Imbd Id'
                        placeholder='imbdId'
                        register={register}
                        errors={errors}
                        required 
                        disabled={isLoading}
              />
          </div>
          <MainTextArea
            id="description"
            label="Description"
            placeholder="description"
            errors={errors}
            register={register}
            required
            disabled={isLoading}
          />
        </div>
        <div className="flex gap-x-[30px] gap-y-[20px] md:flex-nowrap flex-wrap items-center">
          <div className=" flex gap-[20px]">
            <ImageUpload
              label="Big banner"
              onChange={(image) => setCustomValue("serialBannerBig", image)}
              value={imageBig}
              disabled={isLoading}
            />
            <ImageUpload
              label="small banner"
              onChange={(image) => setCustomValue("serialBannerSmall", image)}
              value={imageSmall}
              disabled={isLoading}
            />
          </div>
          <div className="w-[15rem]">
            <CheckBoxDropdown
              submitedTags={formtags}
              data={tags}
              onClick={(tag) => addToTags(tag)}
              label="Choose tags"
            />
          </div>
        </div>
    
      </section>
      <div className='w-full bg-[#FFFFFF1A] h-[1px]' />
      <section className="flex flex-col gap-[30px]">
        <h1 className="font-bold md:text-[30px] text-[24px] text-white">
            Upload first serie
        </h1>
        <div className="flex justify-between gap-x-[50px] gap-y-[30px] flex-col">
            <MainTextInput
                id="serieTitle"
                label="Serie title"
                placeholder="title"
                register={register}
                errors={errors}
                required
                disabled={isLoading}
              />
               <MainTextArea
                  id="serieDescription"
                  label="Serie description"
                  placeholder="description"
                  errors={errors}
                  register={register}
                  required
                  disabled={isLoading}
                />
                <MainFileUploadInput
                  id="serie"
                  required
                  label="Upload first serie"
                  placeholder="Upload first video"
                  register={register}
                  errors={errors}
                  disabled={isLoading}
                
                />
        </div>
      </section>
      <div className="sm:w-[10rem] w-[5rem] mx-auto">
          <CustomButton
            full
            label="Create"
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
          />
        </div>
      {upload && <ProgressBar value={progress} />}
    </section>
  );
};
