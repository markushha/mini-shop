import React from 'react'

interface deleteProps {
  key: number
  deleteHandler: (e: React.FormEvent) => void
}

function DeleteButton({key, deleteHandler}: deleteProps) {

  return (
    <div>
      <button
        className=" text-white my-3 rounded-full bg-red-700 text-center h-[40px] w-[40px] hover:bg-red-500 active:bg-red-600"
        onClick={(e) => deleteHandler(e)}
      >
        <p>-</p>
      </button>
    </div>
  );
}

export default DeleteButton