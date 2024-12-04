import "./CategoryDetail.css";

import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";

import { getProductsWhere } from "../../Entities/Products/model.js"

export default function CategoryDetail(props) {
  const [products, setProducts] = useState([])
  const { slug } = useParams();

  useEffect(() => {
    getProductsWhere('category', slug).then((data) => {
      setProducts(data)
    })
  }, [slug])

  return (
    <div className="CategoryDetailContainer">
      {products.map((product) => (
        <div className="" key={product.id} >
          {product.title}
        </div>
      ))}
    </div>
  )
}
