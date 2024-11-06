import { Component } from "react";
import "./product.css";

export class Product extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}