'use client'

import getUpcomingReleases from '@/app/actions/QueryActions/getUpcomingReleases'
import { movieReleases } from '@/app/constants'
import { MoviesByMonth } from '@/app/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const UpComingReleases = () => {

    const {
        data:upcomingMovies,
        isLoading
    } = getUpcomingReleases()
    const [moviesByMonth,setMoviesByMonth] = useState<any>()

    useEffect(()=>{
        if(!isLoading){
            const updatedMoviesByMonth:any = [];

            upcomingMovies.results.forEach((movie:any) => {
                const releaseDate = new Date(movie.release_date);
                const releaseMonth = releaseDate.toLocaleString('en-US', { month: 'long' });
                const releaseMonthKey = releaseDate.toLocaleString('en-US', { year: 'numeric', month: '2-digit' });
                const releaseYear = releaseDate.toLocaleString('en-US',{year:'numeric'})
                const currentYear = new Date().toLocaleString('en-US',{year:'numeric'})
                if(releaseYear === currentYear){

                    
                    if (!updatedMoviesByMonth[releaseMonthKey] ) {
                        updatedMoviesByMonth[releaseMonthKey] = {
                            month: releaseMonth,
                            movies: [],
                        };
                        
                    }
                    updatedMoviesByMonth[releaseMonthKey].movies.push(movie);
                }
            });

            setMoviesByMonth(updatedMoviesByMonth)
        }
        
    },[isLoading])

    if(!moviesByMonth){
        return <h1>Loading</h1>
    }

    
  return (
    <section className='w-full h-full pt-[20px] pb-[40px]'>
        <h1 className='uppercase font-bold text-[25px] text-white'>Upcoming Release</h1>

        <div className='flex flex-col gap-[60px] pt-[80px]'>
        {
            Object.values(moviesByMonth).sort((a: any, b: any) => {
                const monthOrder:any = {
                  January: 1,
                  February: 2,
                  March: 3,
                  April: 4,
                  May: 5,
                  June: 6,
                  July: 7,
                  August: 8,
                  September: 9,
                  October: 10,
                  November: 11,
                  December: 12,
                };

                return monthOrder[a.month] - monthOrder[b.month]
              })
            .map((byMonth: any,index) => (
                <div className='flex flex-col gap-[20px]' key={byMonth.month + index}>
                <h1 className='uppercase font-bold text-[25px] text-white'>
                    {byMonth.month}
                </h1>
                <div className='w-full h-[1px] bg-[#FFFFFF1A]' />
                <div className='flex gap-y-[20px] flex-wrap'>
                    {byMonth.movies.map((movie: any) => (
                    <div className='flex lg:gap-[40px] gap-[20px] 2xl:basis-1/4 xl:basis-1/3 lg:basis-1/2 w-full items-center' key={movie.title}>
                        <div className='lg:w-16 lg:h-16 w-12 h-12 flex justify-center items-center text-black bg-white rounded-full font-extrabold'>
                        {new Date(movie.release_date).toLocaleString('en-US', { day: 'numeric' })}
                        </div>
                        <div className='flex gap-[14px] items-center'>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
                    ))}
                </div>
                </div>
            ))
        }

        </div>
    </section>
  )
}
