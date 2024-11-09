import { useEffect, useState } from 'react';
import './general.css';
import { Header } from '../../components/Headers/header.jsx';
import { Category } from '../../components/Category/category';
import { Product } from '../../components/Product/product';

import { getProducts } from '../../database/api';

export default function GeneralPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data)
    });
    
  }, [])

  return (
    <div className="App">
      <Header></Header>
      <Category title={"Акційні товари"}>
        {products.map((product, index) => (
            <Product>{product.title} | {product.price} грн</Product>
          ))}
      </Category>
      <Category title={"Картріджі"}>Тут будуть Картріджі</Category>
      <Category title={"Жижі"}>А тут жижі</Category>
      <Category title={"Под системи"}>А сюди розмістити под системи</Category>
    </div>
  );
}
