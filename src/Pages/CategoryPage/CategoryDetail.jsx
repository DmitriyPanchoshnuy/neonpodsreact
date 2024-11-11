import React, { useEffect, useState } from "react";
import { getProductsWhere } from "../../database/api";
import { useParams } from "react-router-dom";
import { Product } from "../../components/Product/product";

import "./CategoryDetail.css"

export default function CategoryDetail(props) {
    const [products, setProducts] = useState([]);

    const { slug } = useParams();

    useEffect(() => {
        getProductsWhere('category', slug).then((data) => {
            setProducts(data);
        })
    }, [slug])

    return (
        <div className="CategoryDetailProductList">
            {products.map((product) => (
                <Product product={product} />
            ))}
        </div>
    )
}