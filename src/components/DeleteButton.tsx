import React from 'react';
import { IProduct } from "../../models";

interface deleteProps {
  product: IProduct
  onDeleteHandler: (id: Number) => void
}

function DeleteButton({ product, onDeleteHandler }: deleteProps) {

  return (
    <>
      <button
        className="rounded bg-red-700 text-center h-[40px] duration-100 ease-in hover:bg-red-500 active:bg-red-600 mt-4 w-[150px]"
        onClick={() => {
          onDeleteHandler(product.id);
        }}
      >
        <p className="text-white font-semibold">Delete Product</p>
      </button>
    </>
  );
}

export default DeleteButton