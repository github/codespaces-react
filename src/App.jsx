import './App.css';
import { useEffect, useState } from 'react';
import Home from './Home';
import Splash from './Splash';
import Disclaimer from './Disclaimer';
import PrivacyPolicy from './PrivacyPolicy';

const App = () => {
  const COOKIE_NAME = 'has_visited_before';
  const [showPage, setShowPage] = useState(0);

  useEffect(() => {
    const getCookieValue = (cookie_var_name) => (
      document.cookie.split('; ').find(row => row.startsWith(cookie_var_name + '='))?.split('=')[1] 
    ); //return the corresponding value of the var of ‘has_visted_before’
    
    const cookie = getCookieValue(COOKIE_NAME); 
    //cookie is either set to true or undefined, undefined counts as false

    if(cookie){
      setShowPage(1); //show home page
    }
  }, [])

  const setPage = (page) => {
    setShowPage(page);
  }

  return (
    <>
      {showPage == 0 && <Splash setPage={setPage}/>} 
      {showPage == 1 && <Home setPage={setPage}/>} 
      {showPage == 2 && <Disclaimer setPage={setPage}/>} 
      {showPage == 3 && <PrivacyPolicy setPage={setPage}/>} 
       {/* {....} */}
    </>
  );
}

export default App;
