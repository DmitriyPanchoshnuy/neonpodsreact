import { Link } from "react-router-dom";
import "./category.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useEffect, useState } from "react";

export function Category (props) {
    const [category, setCategory] = useState({});

    useEffect(() => {
        setCategory(props.category)
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
                {props.children}
            </div>
        </div>
    )
}