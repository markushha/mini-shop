import {useEffect, useState} from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../../models";

export function useProducts() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function addProduct(product: IProduct) {
    setProducts((prev) => [product, ...prev]);
  }

  function deleteProduct(id: Number) {
    const removedArr = [...products].filter((product) => product.id !== id);
    setProducts(removedArr);
  }

  const getProducts = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        `https://fakestoreapi.com/products?limit=20`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (e) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
      console.log('error')
    }
  };

  useEffect(() => {
    getProducts();
  }, [])

  return { products, loading, error, addProduct, deleteProduct };
}
