import "./SectionPage.css";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCategoriesWhere } from "../../Entities/Categories/model.js"

export default function SectionPage(props) {
  const [categories, setCategories] = useState([])

  const navigate = useNavigate();

  const { slug } = useParams();

  useEffect(() => {
    getCategoriesWhere("section", slug).then((data) => {
      setCategories(data)
    })

  }, [slug])
 

  return (
    <div className="SectionPageContainer">
      <h3>Оберіть бажану категорію</h3>
      <div className="CategoryList">
        {categories.map((category) => (
          <div key={category.id} className="ListItem" onClick={() => {navigate("/category/" + category.id)}}>
            {category.title}
          </div>
        ))}
      </div>
    </div>
  ) 
}
