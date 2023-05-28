import { Container } from '@/app/Container'
import React, { useState } from 'react'
import { CastSlider } from './CastSlider'

export const MovieDescription = () => {
    const description = 'The Last of Us is an American post-apocalyptic drama television series created by Craig Mazin and Neil Druckmann for HBO. Based on the 2013 video game developed by Naughty Dog, the series is set in 2023, twenty years into a pandemic caused by a mass fungal infection, which causes its hosts to transform into zombie-like creatures and collapses society. The series follows Joel (Pedro Pascal), a smuggler tasked with escorting the immune teenager Ellie (Bella Ramsey) across a post-apocalyptic United States in hopes of finding a group known as the Fireflies who may have a potential cure for the infection. The television adaptation of The Last of Us is a remarkable achievement that successfully captures the essence and emotional depth of the original video game. Mazin and Druckmann have crafted a compelling narrative that explores themes of survival, humanity, and the lengths people are willing to go to protect those they care about.'
    const [showFullDesc,setShowFullDesc] = useState<boolean>(description.length <= 700)
  
    return (
    <section className='flex flex-col gap-[24px] pt-[20px] pb-[40px]'>
        <Container>
            <div className='flex flex-col gap-[16px] text-white'>
                    <h2 className='font-bold text-[18px] leading-[26px]'>Story Line</h2>

                    <p className='text-[#9CA4AB] text-[16px] font-medium leading-[24px]'>
                        { !showFullDesc ?
                        <React.Fragment>
                            {description.slice(0,700)}
                            <span>....</span>
                            <span className='text-[#00925D] cursor-pointer' onClick={()=>setShowFullDesc(true)}> More</span>
                        </React.Fragment>
                        :
                        description
                        
                    }
                    </p>
            </div>
        </Container>
        <Container rightSpace>
            <CastSlider/>
        </Container>
    </section>
  )
}
