import React, { useEffect, useState } from "react";
import { getCategoriesWhere, getProductsWhere } from "../../database/api";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../components/Product/product";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./CategoryDetail.css";

export default function CategoryDetail(props) {
    const [itsCategory, setItsCategory] = useState({});
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const { slug } = useParams();

    useEffect(() => {
        getProductsWhere('category', slug).then((data) => {
            setProducts(data);
        })

        getCategoriesWhere('id', slug).then((data) => {
            setItsCategory(data[0])
        })
    }, [slug])

    return (
        <div className="CategoryDetail-item">
            <div className="header">
                <div className="buttonback">
                    <button onClick={() => {navigate(-1)}}>
                        <i class="bi bi-arrow-left"></i>
                    </button>
                </div>
                <div className="title">
                    {itsCategory.title}
                </div>
            </div>

            <div className="CategoryDetailProductList">
                {products.map((product) => (
                    <Product product={product} />
                ))}
            </div>
        </div>
    )
}