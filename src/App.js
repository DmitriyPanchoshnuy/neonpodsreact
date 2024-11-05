import { useEffect } from 'react';
import './App.css';
import { Header } from './components/Headers/header.jsx';
import { Category } from './components/Category/category';

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  const CloseButton = () => {
    tg.close()
  };
  return (
    <div className="App">
      <Header></Header>
      <Category title={"Акційні товари"}>Сюди типу акційні товари</Category>
      <Category title={"Картріджі"}>Тут будуть Картріджі</Category>
      <Category title={"Жижі"}>А тут жижі</Category>
      <Category title={"Под системи"}>А сюди розмістити под системи</Category>
      <button onClick={CloseButton}>Close</button>
    </div>
  );
}

export default App;
