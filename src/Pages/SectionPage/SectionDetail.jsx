import React, { useEffect, useState } from "react";
import { getCategoriesWhere, getSectionsWhere } from "../../database/api";
import { useParams } from "react-router-dom";

import "./SectionDetail.css";
import { Category } from "../../components/Category/category";
import NavigatorBar from "../../components/Navigation/navigators";

export default function SectionDetail(props) {
    const [itsSection, setItsSection] = useState({});
    const [categories, setCategories] = useState([]);

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
            <NavigatorBar title={itsSection.title} />

            <div>
                {categories.map((category) => (
                    <Category category={category} />
                ))}
            </div>
        </div>
    )
}