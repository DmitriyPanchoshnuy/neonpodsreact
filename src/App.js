import { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './Hooks/useTelegram';

import HeaderComponent from './components/Header/Header';
import GeneralPage from './Pages/GeneralPage/GeneralPage';

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
        {/* <Route path='/section/:slug' element={<SectionDetail/>} />
        <Route path='/categories/:slug' element={<CategoryDetail/>}/> */}
      </Routes>
    </div>
  );
}