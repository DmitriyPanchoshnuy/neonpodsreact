import { useEffect, useState } from 'react';
import './general.css';
import { Category } from '../../components/Category/category';
import { Product } from '../../components/Product/product';

import { getProducts } from '../../database/api';

export default function GeneralPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
    
  }, [products])

  return (
    <div className="App">
      <Category title={"Акційні товари"}>
        {products.map((product, index) => (
            <Product product={product} />
          ))}
      </Category>
      <Category title={"Картріджі"}>Тут будуть Картріджі</Category>
      <Category title={"Жижі"}>А тут жижі</Category>
      <Category title={"Под системи"}>А сюди розмістити под системи</Category>
    </div>
  );
}
