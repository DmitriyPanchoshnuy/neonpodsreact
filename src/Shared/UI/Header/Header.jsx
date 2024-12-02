import "./Header.css";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate } from "react-router-dom";

export default function HeaderComponent(props) {
    // eslint-disable-next-line
    const [BasketAmount, setBasketAmount] = useState(0.00)

    const navigator = useNavigate();

    return (
        <div className="HeaderComponentContainer">
            <div className="ActionButtonList">
                <div className="Action" onClick={() => {navigator(-1)}}>
                    <i class="bi bi-arrow-left"></i>
                </div>
                <div className="Action" onClick={() => {navigator('/')}}>
                    <i class="bi bi-house-door"></i>
                </div>
            </div>
            <div className="UserBasket">
                <i class="bi bi-cart"></i>
                <span className="OrderAmount">
                    {BasketAmount}
                </span>
            </div>
        </div>
    )
}
