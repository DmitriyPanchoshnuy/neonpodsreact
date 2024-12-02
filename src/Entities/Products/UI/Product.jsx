import "Product.css";

import { useEffect, useState } from 'react';

export default function Product(props) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product);
  }, [props.product])
  

  return (
    <div className="ProductContainer">
      {product.title} | {product.price}
    </div>
  )
}
