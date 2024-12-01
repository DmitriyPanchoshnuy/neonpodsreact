import "./GeneralPage.css";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom"
import { getSections } from "../../Shared/API/DataBase/api.js"

import ActionButton from "../../Shared/UI/Button/ActionButton/ActionButton.jsx";

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
          <ActionButton text={section.title} onClick={() => {navigator("section/" + section.id)}}>
            {section.title}
          </ActionButton>
        ))}
      </div>
    </div>
  )
}
