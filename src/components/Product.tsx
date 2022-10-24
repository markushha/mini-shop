import React, { useState } from "react";
import { IProduct } from "../../models";
import DeleteButton from "./DeleteButton";
import CartAdd from "./CartAdd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface ProductProps {
  product: IProduct;
  deleteProduct: (id: Number) => void;
}

const notify = () =>
  toast.success(`Succesfully added to Cart!`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
  });

function Product({ product, deleteProduct }: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toast, setToast] = useState(false);

  const onDeleteHandler = (id: Number) => {
    deleteProduct(id);
  };

  const showToast = () => {
    setToast(true);
    notify();
  };

  return (
    <div className="border py-4 px-4 rounded-lg flex flex-col items-center mb-6">
      <img className="w-1/6" src={product.image} alt={product.title} />
      <p className="mt-2 mb-1 font-semibold">{product.title}</p>
      <p className="font-bold mb-2">{product.price} $</p>
      <button
        className={`py-2 px-4 border rounded ease-in duration-100 w-[150px] ${
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
        <>
          <div className="text-center">
            <p className="mt-3 mb-2">{product.description}</p>
            <label className="font-bold">Category:</label>
            <p className="font-semibold">{product.category}</p>
          </div>
          <DeleteButton
            key={product.id}
            product={product}
            onDeleteHandler={onDeleteHandler}
          />
        </>
      )}
      {!isOpen && <CartAdd showToast={showToast} />}
      {toast && <ToastContainer />}
    </div>
  );
}

export default Product;
