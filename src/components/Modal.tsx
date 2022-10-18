import React from 'react'

interface ModalProps {
  children: React.ReactNode
  title: string
  onClose: () => void
}

function Modal( { children, title, onClose }: ModalProps) {
  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 mt-[150px]'>
      <div className="fixed bg-black/50 top-0 bottom-0 right-0 left-0" onClick={onClose}/>
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <p className='font-semibold mb-4 px-2 text-center'>{title}</p>
        {children}
      </div>
    </div>
  );
}

export default Modal
