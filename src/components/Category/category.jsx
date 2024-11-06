import { Component } from "react";
import "./category.css";

export class Category extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}