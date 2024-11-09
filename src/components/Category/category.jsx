import "./category.css";
import "bootstrap-icons/font/bootstrap-icons.css"

export function Category (props) {

    return (
        <div className="category">
            <div className="header">
                <div className="title">{props.title}</div>
                <div className="actionbutton">
                    <button>
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>

            <div className="content">
                {props.children}
            </div>
        </div>
    )
}