import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './Shared/Hooks/useTelegram';

import HeaderComponent from './Shared/UI/Header/Header';

import GeneralPage from './Pages/GeneralPage/GeneralPage';
import SectionPage from "./Pages/SectionPage/SectionPage.jsx"

export default function App() {
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [tg])

  return (
    <div>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<GeneralPage/>} />
        <Route path='/section/:slug' element={<SectionPage/>} />
        {/* <Route path='/categories/:slug' element={<CategoryDetail/>}/> */}
      </Routes>
    </div>
  );
}
