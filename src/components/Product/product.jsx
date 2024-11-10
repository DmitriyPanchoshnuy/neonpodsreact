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
            <div>
                <div>
                    <p>{product.title}</p>
                </div>
                <div>
                    {product.price}
                </div>
            </div>
        </div>
    )
}