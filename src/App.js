import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import GeneralPage from "./Pages/GeneralPage/general"; 

const tg = window.Telegram.WebApp;

export default function App() {

  useEffect(() => {
    tg.ready()
  }, [])


  return (
    // <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path='/' element={<GeneralPage/>}/>
        <Route path='/categories/:id' />
      </Routes>
  );
}