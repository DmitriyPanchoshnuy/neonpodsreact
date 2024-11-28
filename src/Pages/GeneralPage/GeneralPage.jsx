import "./GeneralPage.css";
import { useEffect, useState } from "react";

import { getSections } from "../../database/api.js"

export default function GeneralPage(props) {
  const [sections, setSections] = useState([])

  useEffect(() => {
    getSections().then((data) => {
      setSections(data)
    })
  }, [])

  return (
    <div className="GeneralPageContainer">
      <p className="">Що ви бажаєте замовити?</p>
      <p>Можливо замовити доставку або самовиніс.</p>
      <p>Оберіть бажану вами категорію</p>
      <div className="">
        {sections.map((section) => (
          <span>{section.title}</span>
        ))}
      </div>
    </div>
  )
}
