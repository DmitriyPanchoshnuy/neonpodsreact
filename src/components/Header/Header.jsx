import "./Header.css";
import { useState } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function HeaderComponent(props) {
    // eslint-disable-next-line
    const [BasketAmount, setBasketAmount] = useState(0.00)

    return (
        <div className="HeaderComponentContainer">
            <div className="ActionButtonList">
                <div className="Action">
                    <i class="bi bi-arrow-left"></i>
                </div>
                <div className="Action">
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