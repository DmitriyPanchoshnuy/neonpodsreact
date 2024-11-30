import "./GeneralPage.css";
import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom"
import { getSections } from "../../Shared/API/DataBase/api.js"

import Button from "../../Shared/UI/Button//Button.jsx";

export default function GeneralPage(props) {
  const [sections, setSections] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getSections().then((data) => {
      setSections(data);
    })
  }, [])

  return (
    <div className="GeneralPageContainer">
      <p className="">Що ви бажаєте замовити?</p>
      <p>Можливо замовити доставку або самовиніс.</p>
      <p>Оберіть бажану вами категорію</p>
      <div className="SectionList">
        {sections.map((section) => (
          <Button text={section.title}>
            {section.title}
          </Button>
        ))}
      </div>
    </div>
  )
}
