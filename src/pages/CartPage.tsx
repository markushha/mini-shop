import React from 'react';
import { useProducts } from '../hooks/products';

function CartPage() {
  const { products } = useProducts();
  
  return (
    <>
      <div>CartPage</div>
    </>
  );
}

export default CartPage