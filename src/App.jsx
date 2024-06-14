import './App.css';
import { useState } from 'react';
import Home from './Home';
import Splash from './Splash';
import Disclaimer from './Disclaimer';

const App = () => {
  const [showPage, setShowPage] = useState(0);

  const setPage = () => {
    setShowPage(showPage+1);
  }

  return (
    <>
      {showPage == 0 && <Splash setPage={setPage}/>} 
      {showPage == 1 && <Disclaimer setPage={setPage}/>} 
      {showPage == 2 && <Home/>} 
       {/* {....} */}
    </>
  );
}

export default App;
