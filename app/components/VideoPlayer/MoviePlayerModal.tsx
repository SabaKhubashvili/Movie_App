'use client'

import React,{useState} from 'react'
import { MoviePlayer } from './MoviePlayer'
import { Modal } from '../Modals/Modal'


interface Props{
    movieLink:string
    isOpen:boolean
    onClose:()=>void
}

export const MoviePlayerModal = ({movieLink,isOpen,onClose}:Props) => {

    let bodyContent = (
        <MoviePlayer link={movieLink}/>
    )
  return (
    <Modal
    isOpen={isOpen}
    onClose={onClose}     
    body={bodyContent}
/>
  )
}
