import React, { useState } from 'react'
import { IProduct } from '../../models';
import axios from 'axios'
import ErrorMessage from './ErrorMessage';

const productData: IProduct = {
  title: "test product",
  price: 13.5,
  id: 1,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
  rating: {
    rate: 42,
    count: 10
  }
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void
}

function CreateProduct({ onCreate }: CreateProductProps) {
  const [value, setValue] = useState('');
  const [priceValue, setPriceValue] = useState('');
  const [description, setDescription] = useState("");
  const [URL, setURL] = useState('');
  const [category, setCategory] = useState("Clothes");
  const [error, setError] = useState("");

  const submitHandler = async (e : React.FormEvent) => {
    e.preventDefault();
    setError('');

    if(value.trim().length === 0 || Number(priceValue) <= 0 || description.trim().length === 0 || URL.trim().length === 0 || category === '') {
      setError('Please enter valid data');
      return;
    }

    productData.title = value;
    productData.price = Number(priceValue);
    productData.description = description;
    productData.image = URL;
    productData.category = category;
    
    const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData);
    onCreate(response.data);
    
    setValue('');
  }

  return (
    <form onSubmit={submitHandler}>
      <label className="py-2 px-2 font-semibold">
        Enter the title and price of your product in USD
      </label>
      <input
        type="text"
        className="border py-2 px-4 mb-2 mt-2 w-full outline-0"
        placeholder="Enter the product's title..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <input
        type="number"
        className="border py-2 px-4 mt-2 mb-4 w-full outline-0"
        placeholder="Enter the price of product..."
        value={priceValue}
        onChange={(event) => setPriceValue(event.target.value)}
      />

      <label className="py-2 px-2 font-semibold">
        Type some description of your product
      </label>
      <textarea
        className="border py-2 px-4 mt-2 mb-4 w-full outline-0"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      >
        This product is very useful in your trips! Also...
      </textarea>

      <label className="py-2 px-2 font-semibold">
        Paste the product image URL
      </label>
      <input
        type="text"
        className="border py-2 px-4 mt-2 mb-4 w-full outline-0"
        placeholder="Paste here the URL of your product's image"
        value={URL}
        onChange={(e) => setURL(e.target.value)}
      />

      <label className="py-2 px-2 font-semibold">
        Select the category of your product
      </label>
      <select className="border py-2 px-4 mb-6 mt-2 w-full outline-0" onChange={(e) => { setCategory(e.target.value) }}>
        <option value="Clothes">Clothes</option>
        <option value="Electronic">Electronic</option>
        <option value="Books">Books</option>
        <option value="Accessories">Accessories</option>
        <option value="Office">Office</option>
        <option value="Sweets">Sweets</option>
        <option value="Furniture">Furniture</option>
        <option value="Sport">Sport</option>
      </select>

      {error && <ErrorMessage error={error} />}

      <button
        type="submit"
        className="py-2 px-4 border rounded w-[150px] bg-blue-200 hover:bg-blue-400 ml-[50%] translate-x-[-50%]"
      >
        Create
      </button>
    </form>
  );
}

export default CreateProduct
