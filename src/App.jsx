import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import Splash from './Splash';
import Disclaimer from './Disclaimer';

const App = () => {
  const COOKIE_NAME = 'has_visited_before';
  const [showPage, setShowPage] = useState(0);

  useEffect(() => {
    const getCookieValue = (name) => (
      document.cookie.split('; ').find(row => row.startsWith(name + '='))?.split('=')[1]
    );
    
    const cookie = getCookieValue(COOKIE_NAME)
    if(cookie){
      setShowPage(2);
    }

  }, [])

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
