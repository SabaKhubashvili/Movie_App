import React, { useEffect, useRef, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?:()=>void
  header?:React.ReactElement
  body: React.ReactElement;
  footer?: React.ReactElement
  paddings?:boolean
  small?:boolean
  darkBg?:boolean
  disabled?:boolean
  dropdownRef?:React.RefObject<HTMLDivElement>
}

export const Modal = ({footer, header,isOpen, onClose, body,paddings,small,darkBg,disabled,dropdownRef}:Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

  useEffect(() => {
    if(showModal && !disabled){
        
        const handleOutsideClick = (event: MouseEvent) => {

            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowModal(false)
                setTimeout(() => {
                  onClose();
                }, 300);

        }
        
    };
    
    window.addEventListener('click', handleOutsideClick);
    
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
}
  }, [onClose,showModal,disabled]);

 

  if (!isOpen) {
    return null;
  }

  return (
    <div 
    className={`h-full fixed inset-0 flex justify-center items-center  overflow-x-hidden overflow-y-hidden z-[100] 
    ${darkBg ? ' bg-neutral-950/95' : 'bg-neutral-800/70'}
    ${disabled && 'opacity-90'}
    transition-all duration-300
    `}>
      <div ref={modalRef} 
      className={`${small ? 'relative w-full md:w-4/6 lg:w-3/6 xl:w-2/6  mx-auto h-full md:h-auto' : 'sm:w-5/6 w-full h-[40rem]'}`}>
        <div
          className={`transition-all duration-300 h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className={`flex flex-col justify-center gap-[30px] bg-[#171717] h-full w-full rounded-lg ${paddings && 'p-10'}`}>
            {header}
            {body}
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};
