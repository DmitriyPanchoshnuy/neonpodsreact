import { useEffect } from 'react';
import './App.css';

// @ts-ignore
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
      work
      <button onClick={CloseButton}>Close</button>
    </div>
  );
}

export default App;
