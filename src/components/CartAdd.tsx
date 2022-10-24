import React from 'react';

interface CardProps {
  showToast: () => void
}

function CartAdd({showToast}: CardProps) {
  return (
    <>
      <button
        className="bg-emerald-400 text-center mt-2 w-[150px] rounded ease-in duration-100 py-2 px-4 hover:bg-green-500 active:bg-green-600"
        onClick={() => {
          showToast();
        }}
      >
        <p className="text-white font-semibold">Add to cart</p>
      </button>
    </>
  );
}

export default CartAdd