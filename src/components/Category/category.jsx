import { Link } from "react-router-dom";
import "./category.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useEffect, useState } from "react";
import { Product } from "../Product/product";
import { getProductsWhere } from "../../database/api";

export function Category (props) {
    const [category, setCategory] = useState({});
    const [products, setProducts] = useState([])

    useEffect(() => {
        setCategory(props.category);

        getProductsWhere('category', props.category.id).then((data) => {
            setProducts(data)
        })
    }, [props.category])


    return (
        <div className="category-item">
            <div className="header">
                <div className="title">{category.title}</div>
                <div className="actionbutton">
                    <Link to={`/categories/${category.id}`}>
                        <i class="bi bi-arrow-right"></i>
                    </Link>
                </div>
            </div>

            <div className="content">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}