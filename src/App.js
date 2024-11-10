import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Suspense } from 'react';
import GeneralPage from "./Pages/GeneralPage/general"; 
import { useTelegram } from './Hooks/useTelegram';
import { Header } from './components/Headers/header';

export default function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [tg])


  return (
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Header></Header>
      <Routes>
        <Route index path='/' element={<GeneralPage/>}/>
        <Route path='/categories/:id' />
      </Routes>
    </Suspense>
  );
}