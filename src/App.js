import './App.css';
import { useState, useEffect } from 'react';
import api from './utils/api';
import Gallery from './components/gallery/Gallery';
import Lightbox from './components/lightbox__popup/Lightbox';
function App() {
  const [apiData, setApiData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [cat, setCat] = useState('')
  useEffect(() => {
    //запрашиваю из внешнего апи карточки котов
    api.getCards()
      .then(data => setApiData(data))
      .catch(err => console.log(err))
  }, []);
  //управление видимостью modal
  const handleModal = () => {
    setIsOpen(!isOpen)
  };
  //для передачи url в modal
  const setUrl = (url) => {
    setCat(url);
  } 
  return (
    <>
      <div className="App">
        <header className="App-header">
          Моя любимая коллекция фотокарточек.
        </header>
        <Gallery cats={apiData} handleModal={handleModal} setCatUrl={setUrl}></Gallery>
        <footer className="footer">
          &copy; {new Date().getFullYear()} Котогалерея
        </footer>
      </div>
      <Lightbox catImg={cat} isOpen={isOpen} handleModal={handleModal}/>
    </>
  );
}

export default App;
