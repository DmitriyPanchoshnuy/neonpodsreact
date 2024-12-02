import "./CategoryDetail.css";

import { useParams } from "react-router-dom";

export default function CategoryDetail(props) {
  const { slug } = useParams();

  return (
    <div className="CategoryDetailContainer">
      {slug}
    </div>
  )
}
