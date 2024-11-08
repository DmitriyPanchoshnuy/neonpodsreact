import { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Headers/header.jsx';
import { Category } from './components/Category/category';
import { Product } from './components/Product/product';

import { getProducts } from './database/api';

const tg = window.Telegram.WebApp;

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      console.log(data)
    });
    
    tg.ready()
  }, [])

  const CloseButton = () => {
    tg.close()
  };
  return (
    <div className="App">
      <Header></Header>
      <Category title={"Акційні товари"}>
        {products.map((product, index) => (
            <Product>{product.title} | {product.category}</Product>
          ))}
      </Category>
      <Category title={"Картріджі"}>Тут будуть Картріджі</Category>
      <Category title={"Жижі"}>А тут жижі</Category>
      <Category title={"Под системи"}>А сюди розмістити под системи</Category>
      <button onClick={CloseButton}>Close</button>
    </div>
  );
}

export default App;
