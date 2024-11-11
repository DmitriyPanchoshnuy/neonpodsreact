import { useEffect, useState } from "react";
import "./product.css";

export function Product(props) {
    const [product, setProduct] = useState({}); 

    useEffect(() => {
        setProduct(props.product)
    }, [props.product])
    return (
        <div className="product-item">
            <div className="container-image">
                <img className="image" src={product.image_url} alt="Картинка товару"/>
            </div>
            <div className="content">
                <div className="title">
                    {product.title}
                </div>
                <div className="price">
                    
                </div>
            </div>

            <button>
                {product.price} грн <i class="bi bi-cart-plus"></i>
            </button>
        </div>
    )
}