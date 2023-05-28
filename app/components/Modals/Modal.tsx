import React, { useEffect, useRef, useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  link: string;
  body: React.ReactElement;
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, link, body }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

  useEffect(() => {
    if(showModal){
        
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
        
    };
    
    window.addEventListener('click', handleOutsideClick);
    
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
}
  }, [onClose,showModal]);

 

  if (!isOpen) {
    return null;
  }

  return (
    <div className='h-screen fixed inset-0 flex justify-center items-center bg-neutral-800/70 overflow-x-hidden overflow-y-auto z-[100]'>
      <div ref={modalRef} className={`sm:w-5/6 w-full h-[40rem]`}>
        <div
          className={`transition-all duration-300 h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}
        >
          {body}
        </div>
      </div>
    </div>
  );
};
