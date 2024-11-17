import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './general.css';
import { getSections } from '../../database/api';

import { useTelegram } from '../../Hooks/useTelegram';

export default function GeneralPage() {
  const [sections, setSections] = useState([]);
  const [basket, setBasket] = useState(() => {
    return JSON.parse(localStorage.getItem('basket')) || [];
  })

  const {tg, onClose} = useTelegram();

  useEffect(() => {
    getSections().then((data) => {
      setSections(data)
    })
  }, [])

  return (
    <div className="App">
      <div>
        Що ви бажаєте замовити?

      </div>
      <div className='SectionList'>
        {sections.map((section) => (
          <Link to={`/section/${section.id}`} className='button-section'>
              {section.title}
          </Link>
        ))}
      </div>
      {basket.map((product) => (
        product
      ))}
      <br />
      <button onClick={() => {
        tg.sendData(JSON.stringify(basket))
      }}>
        Замовити
      </button>
      <br />
      <button onClick={() => {
        localStorage.clear('basket');
        setBasket([])
      }}>
        Clear
      </button>
      <br />
      <button onClick={() => {onClose()}}>
        CLOSE
      </button>
    </div>
  );
}