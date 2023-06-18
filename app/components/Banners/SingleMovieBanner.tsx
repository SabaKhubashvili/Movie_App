'use client'

import { Container } from '@/app/Container'
import Image from 'next/image'
import React,{useState} from 'react'
import { AddWatchlist, CustomIconButton, PlayButton } from '../Buttons'
import { DownloadIcon, LikeIcon, ShareIcon } from '@/public/svg/icons/Icon'
import { largeScreens } from '../MediaQueries'
import useMediaQuery from '@/app/hooks/UseMediaQuery'
import { safeMovie } from '@/app/types'
import { MoviePlayerModal } from '../VideoPlayer/MoviePlayerModal'
import { toast } from 'react-hot-toast'
interface Props{
    links?:boolean
    movie:safeMovie
    movieLink:string
}

export const SingleMovieBanner = ({links,movie,movieLink}:Props) => {

    const isAboveLargeScreens = useMediaQuery(largeScreens)
    const [ogUrl, setOgUrl] = useState("");

    const [openSerieData,setOpenSerieData] = useState({
        isOpen:false,
        movieLink:movieLink
    })
    React.useEffect(() => {
        const host = window.location.href;
        const baseUrl = `${host}`;
    
        setOgUrl(`${baseUrl}`);
      }, []);
 
    const handleCopy = async () => {
        try {
          await navigator.clipboard.writeText(`${ogUrl}`);
          toast.success('Link Copied')
        } catch (error) {
          toast.error('Failed to copy link')
        }
      };

          

  return (
    <div className=" w-full h-full relative select-none">
    <Image
    src={movie.movieBannerBig}
    alt="SwiperSlide"
    width={1700}
    height={1700}
    className="w-full h-full object-cover absolute inset-0 bg-center bg-cover"
    />
    <Image
    src={'/Image/movies/overlay.webp'}
    alt="SwiperSlide"
    width={1200}
    height={1200}
    className="w-full h-full object-cover absolute inset-0 top-0 bg-center bg-cover"
    />
    <Container>
        <div className="relative text-white 
        flex flex-col justify-end gap-[24px]
        w-full h-full pb-[64px] ">
            
            <div 
            className="px-[16px] py-[4px] bg-[#0D0C0F] text-white 
            rounded-[16px] font-medium text-[16px] w-fit  ">
                Movie
            </div>
            <div className="flex flex-col gap-[8px] w-full sm:w-[506px]">
            <h2 className="font-bold text-[32px] leading-[40px]">
                {/* Title */}
               {movie.title}
            </h2>
            <p className="text-[#9CA4AB] text-[14px]">
                {/* Description */}
                {movie.duration}  
                {movie.movieTags.map((singleTag:any)=>(
                    <span key={singleTag.tag.id}> • {singleTag.tag.name}</span>
                ))}
            </p>
            </div>
            <div className='flex justify-between items-center w-full gap-5 sm:flex-nowrap flex-wrap'>
                <div className="flex gap-[24px] w-fit g:justify-normal justify-between items-center lg:grow-0 flex-grow">
                    <PlayButton  label="Play Now" onClick={()=>setOpenSerieData(prev=>({...prev,isOpen:true}))}/>
                    {isAboveLargeScreens &&

                        <AddWatchlist label="Add Watchlist"/>
                    }
                </div>
                { links &&

                <div className='flex lg:gap-[24px] gap-[12px] items-center'>
                    <a href={`${process.env.AWS_Cloudfront_Link}movies/${movie.id}.mp4`} target='_blank'>
                     <CustomIconButton label='Download' icon={<DownloadIcon/>} />
                    </a>
                    <CustomIconButton label='Share' onClick={handleCopy} icon={<ShareIcon/>} />
                    {/* <CustomIconButton label='Like' icon={<LikeIcon/>} /> */}
                </div>
                }
            </div>
        </div>
    </Container>
    <MoviePlayerModal 
    movieLink={openSerieData.movieLink} 
    onClose={()=>setOpenSerieData(prev=>({...prev,isOpen:false}))}
    isOpen={openSerieData.isOpen}
    banner={movie.movieBannerBig}
    />
      
</div>
  )
}
