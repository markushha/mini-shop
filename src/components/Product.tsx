import React, { useState } from 'react'
import { IProduct } from '../../models';
import DeleteButton from './DeleteButton';

interface ProductProps {
  product: IProduct
}

function Product({product}: ProductProps) {
  const[isOpen, setIsOpen] = useState(false);

  const deleteHandler = (e: React.FormEvent) => {
    console.log(product.id)
  };

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p className="mt-2 mb-1 font-semibold">{product.title}</p>
      <p className="font-bold mb-2">{product.price} $</p>
      <button
        className={`py-2 px-4 border rounded ease-in duration-100 ${
          isOpen
            ? "bg-gray-500 hover:bg-gray-700"
            : "bg-gray-900 hover:bg-gray-700"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <p className="font-semibold text-white">Hide details</p>
        ) : (
          <p className="font-semibold text-white">Show details</p>
        )}
      </button>

      {isOpen && (
        <div className="text-center">
          <p className="mt-3 mb-2">{product.description}</p>
          <label className="font-bold">Category:</label>
          <p className="font-semibold">{product.category}</p>
        </div>
      )}
      <DeleteButton key={product.id} deleteHandler={deleteHandler}></DeleteButton>
    </div>
  );
}

export default Product
