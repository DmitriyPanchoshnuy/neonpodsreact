import { Component } from "react";
import "./category.css";
import "bootstrap-icons/font/bootstrap-icons.css"
import { useNavigate } from "react-router-dom";

export class Category extends Component {
    render() {
        return (
            <div className="category">
                <div className="header">
                    <div className="title">{this.props.title}</div>
                    <div className="actionbutton">
                        <button>
                            <i class="bi bi-arrow-right"></i>
                        </button>
                    </div>
                </div>

                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}