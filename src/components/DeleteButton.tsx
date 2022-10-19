import React from 'react'
import { IProduct } from "../../models";

interface deleteProps {
  product: IProduct
  onDeleteHandler: (id: Number) => void
}

function DeleteButton({ product, onDeleteHandler }: deleteProps) {

  return (
      <button
        className="ml-[100%] translate-x-[-100%] text-white my-3 rounded-full bg-red-700 text-center h-[40px] w-[40px] hover:bg-red-500 active:bg-red-600"
        onClick={() => {onDeleteHandler(product.id)}}
      >
        <p>-</p>
      </button>
  );
}

export default DeleteButton