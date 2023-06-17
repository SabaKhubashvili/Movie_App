import { Container } from "@/app/Container";
import { getSingleTopic } from "@/app/actions/getSingleTopic";
import { CustomIconButton } from "@/app/components/Buttons";
import { AddCommentComponent } from "@/app/components/Comment/AddComment";
import { EmptyClient } from "@/app/components/EmptyClient";
import { SingleForumComponent } from "@/app/components/sections/Forum/SingleForumComponent";
import Link from "next/link";
import React from "react";

interface Iparams {
  TopicId: string;
}

export async function generateMetadata({ params }: { params: Iparams }) {
  const topic = await getSingleTopic(params.TopicId);
  if(topic){
    return {
      title: topic.title,
      description: topic.description,
      image:topic.image
    };
  }else{
    return{
      title: 'Topic not found',
      description: 'Error 404'
    }
  }
}

const page = async ({ params }: { params: Iparams }) => {
  const topic = await getSingleTopic(params.TopicId);

  if(!topic){
    return <EmptyClient
      title="Topic not found"
      description="Error code 404"
    />
  }
  
  return (
    <React.Fragment>
      <Container>
        <section className="pt-[150px] w-full">
          <Link href={"/forum"} className="w-[4rem] inline-block">
            <CustomIconButton showAll label="Back" transparent />
          </Link>
          <div className="pt-[40px] flex flex-col gap-[20px]">
            <SingleForumComponent {...topic} />
            <AddCommentComponent isComment topicId={topic.id}/>
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default page;
