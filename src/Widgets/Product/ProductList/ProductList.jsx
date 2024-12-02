import "./ProductList.css";
import { getProductsWhere } from "../../../Entities/Products/model.js";

import { useEffect, useState } from "react";

import { Product } from "../../../Entities/Products/UI/Product.jsx";

export default function ProductList(props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsWhere(props.column, props.value).then((data) => {
      setProducts(data)
    })
  }, [props.column, props.value])
  

  return (
    <div className="ProductListContainer">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  )
}
