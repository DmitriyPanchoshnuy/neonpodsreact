import React, { useEffect, useState } from "react";
import { getCategoriesWhere, getSectionsWhere } from "../../database/api";
import { useNavigate, useParams } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

import "./SectionDetail.css";
import { Category } from "../../components/Category/category";

export default function SectionDetail(props) {
    const [itsSection, setItsSection] = useState({});
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    const { slug } = useParams();

    useEffect(() => {
        getCategoriesWhere('section', slug).then((data) => {
            setCategories(data);
        })

        getSectionsWhere('id', slug).then((data) => {
            setItsSection(data[0])
        })
    }, [slug])

    return (
        <div className="SectionDetail">
            <div className="page-header">
                <div className="action-button">

                    <button className="BackArrow" onClick={() => { navigate(-1) }}>
                        <i class="bi bi-arrow-left"></i>
                    </button>
                </div>

                <div className="title">
                    {itsSection.title}
                </div>

            </div>

            <div>
                {categories.map((category) => (
                    <Category category={category} />
                ))}
            </div>
        </div>
    )
}