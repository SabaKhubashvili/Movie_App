import { create } from "zustand";

interface registerModalStorage{
    isOpen:boolean,
    onOpen:()=>void
    onClose:()=>void
}

export const  UseRegisterModal = create<registerModalStorage>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))