import { useNavigate } from "react-router-dom";
import "./navigators.css";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function NavigatorBar(props) {

    const navigate = useNavigate()
    return (
        <div className="NavigatorBar">
            <div className="ActionButtonList">

                <button className="ActionButton" onClick={() => { navigate(-1) }}>
                    <i class="bi bi-arrow-left"></i>
                </button>

                <button className="ActionButton" onClick={() => { navigate("/") }}>
                    <i class="bi bi-house-door"></i>
                </button>
            </div>

            <div className="title">
                {props.title}
            </div>

        </div>
    )
} 