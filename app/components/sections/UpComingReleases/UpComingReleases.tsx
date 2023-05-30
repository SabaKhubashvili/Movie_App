import { movieReleases } from '@/app/constants'
import Image from 'next/image'
import React from 'react'

export const UpComingReleases = () => {
  return (
    <section className='w-full h-full pt-[20px] pb-[40px]'>
        <h1 className='uppercase font-bold text-[25px] text-white'>Upcoming Release</h1>

        <div className='flex flex-col gap-[60px] pt-[80px]'>
            {
                movieReleases.map(release=>(
                    <div className='flex flex-col gap-[20px]' key={release.month}>
                        <h1 className='uppercase font-bold text-[25px] text-white'>{release.month}</h1>
                        <div className='w-full h-[1px] bg-[#FFFFFF1A]' />
                        <div className='flex gap-y-[20px] flex-wrap'>
                            {
                                release.movies.map(movie=>(
                                    <div className='flex lg:gap-[40px] gap-[20px] 2xl:basis-1/4 xl:basis-1/3 lg:basis-1/2 w-full items-center' key={movie.title} >
                                        <div className='lg:w-16  lg:h-16 w-12 h-12 flex justify-center items-center
                                         text-black bg-white rounded-full font-extrabold'>
                                            {movie.release_date}
                                        </div>
                                        <div className='flex gap-[14px] items-center'>
                                            <Image
                                                src={'/Image/movies/enolaholmes.webp'}
                                                alt='movie'
                                                width={100}
                                                height={100}
                                                className='lg:w-20 lg:h-20 w-14 h-14 rounded-xl object-cover'
                                            />
                                            <div className='flex flex-col h-full justify-between'>
                                                <h5 className='font-medium text-white'>{movie.title}</h5>
                                                <p className='text-[#78828A] lg:text-[15px] text-[10px]'>{movie.studio}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}
