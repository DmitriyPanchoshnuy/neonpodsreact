import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './general.css';
import { getSections } from '../../database/api';

export default function GeneralPage() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getSections().then((data) => {
      setSections(data)
    })
  }, [])

  return (
    <div className="App">
      <div>
        Що ви бажаєте замовити?

      </div>
      <div className='SectionList'>
        {sections.map((section) => (
          <Link to={`/section/${section.id}`}>{section.title}</Link>
        ))}
      </div>
    </div>
  );
}