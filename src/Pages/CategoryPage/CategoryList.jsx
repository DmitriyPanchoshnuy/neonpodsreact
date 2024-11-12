import { useEffect, useState } from 'react';
import './general.css';
import { Category } from '../../components/Category/category';

import { getCategories } from '../../database/api';

export default function GeneralPage() {
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    getCategories().then((data) => {
      setCategory(data)
    });
    
  }, [])

  return (
    <div className="App">
      {categories.map((category) => (
        <Category key={category.id} category={category.id} />
      ))}
    </div>
  );
}