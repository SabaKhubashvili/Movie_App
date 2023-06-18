'use client'

import React,{useState} from 'react'
import { MoviePlayer } from './MoviePlayer'
import { Modal } from '../Modals/Modal'


interface Props{
    movieLink:string
    isOpen:boolean
    onClose:()=>void
    banner:string
}

export const MoviePlayerModal = ({movieLink,isOpen,onClose,banner}:Props) => {

    let bodyContent = (
        <MoviePlayer banner={banner} link={movieLink}/>
    )
  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}     
    body={bodyContent}
/>
  )
}
