import "./Header.css";
import { useState, useEffect } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderComponent(props) {
  // eslint-disable-next-line
  const [BasketAmount, setBasketAmount] = useState(0.00)

  const navigator = useNavigate();

  const location = useLocation(); 

  useEffect(() => {
  }, [location])

  return (
    <div className="HeaderComponentContainer">
      <div className="ActionButtonList">
        {location.pathname != "/" && 
          <div className="Action" onClick={() => {navigator(-1)}}>
            <i class="bi bi-arrow-left"></i>
          </div>
        }
        {location.pathname != "/" &&
          <div className="Action" onClick={() => {navigator('/')}}>
            <i class="bi bi-house-door"></i>
          </div>
        }
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
