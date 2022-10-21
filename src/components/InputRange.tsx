import React, { useState } from "react";
import { useProducts } from "../hooks/products";
import Slider from '@mui/material/Slider';

function InputRange() {
  const [amount, setAmount] = useState(0);
  const { getProducts } = useProducts();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    getProducts(amount);
  };

  return (
    <form className="text-center" onSubmit={submitHandler}>
      
      <label>{amount}</label>
      <div>
        <button className="rounded-sm text-center font-semibold w-[150px] h-[40px] bg-blue-300 my-2 hover:bg-blue-400">
          Add products
        </button>
      </div>
    </form>
  );
}

export default InputRange;
