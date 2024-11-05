import { useEffect } from 'react';
import './App.css';

// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.close()
  }, [])
  return (
    <div className="App">
      work
      <button onClick={tg.close()}>Close</button>
    </div>
  );
}

export default App;
