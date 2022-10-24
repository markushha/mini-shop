import Product from "../components/Product";
import Loader from "../components/Loader";
import { useProducts } from "../hooks/products";
import ErrorMessage from "../components/ErrorMessage";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct";
import { useState } from "react";
import { IProduct } from "../../models";

function MyShopPage() {
  const { products, loading, error, addProduct, deleteProduct } = useProducts();
  const [modal, setModal] = useState(false);

  const onCreateHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product);
  };

  function setProductsID() {
    products.map((product) => {
      for (let i = 0; i < 6; i++) {
        product.id = Math.floor(Math.random() * 10000);
      }
      return null;
    });
  }

  setProductsID(); 

  return (
    <>
      <div className="container mx-auto max-w-2xl">
        {error && <ErrorMessage error={error} />}
        {loading && <Loader />}

        <div className="container mx-auto max-w-2xl pt-5">
          {products.map((product) => (
            <Product product={product} key={product.id} deleteProduct={deleteProduct}/>
          ))}
        </div>

        {modal && (
          <Modal title="Create Product" onClose={() => setModal(false)}>
            <CreateProduct onCreate={onCreateHandler} />
          </Modal>
        )}

        <button 
        className="fixed bottom-5 right-5 rounded-full bg-red-700 text-center h-[40px] w-[40px] hover:bg-red-500 active:bg-red-600"
        onClick={() => setModal(true)}
        >
          <p className="text-white text-2xl mb-1">+</p>
        </button>
      </div>
    </>
  );
}

export default MyShopPage;
