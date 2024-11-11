import { useEffect, useState } from 'react';
import './general.css';
import { Category } from '../../components/Category/category';
import { Product } from '../../components/Product/product';

import { getProducts, getCategories } from '../../database/api';

export default function GeneralPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });

    getCategories().then((data) => {
      setCategory(data)
    });
    
  }, [])

  const groupedProducts = categories.map((category) => {
    return {
      category,
      products: products.filter(product => product.category === category.id),
    };
  });

  return (
    <div className="App">
      {groupedProducts.map(({category, products}) => (
        <Category key={category.id} title={category.title}>
          {
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          }
        </Category>
      ))}
    </div>
  );
}


// <Category title={"Акційні товари"}>
// {products.map((product, index) => (
//    <Product product={product} />
//  ))}
//</Category>
//<Category title={"Картріджі"}>Тут будуть Картріджі</Category>
//<Category title={"Жижі"}>А тут жижі</Category>
//<Category title={"Под системи"}>А сюди розмістити под системи</Category>