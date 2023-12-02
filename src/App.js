import './App.css';
// import video from "./videos";

// eslint-disable-next-line no-unused-vars
import LoremComponent from './components/loremIpsum';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <h1>Algate Fire</h1>
       
        {/* <img src="logo192.png" className="App-logo" alt="logo" />
        need to add video mp4 from linux computer */}
        <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + 'videos/Algate.mp4'} value="logo" type="video/mp4" />
          Your browser does not support the video tag
        </video>
      {/* navbar starts here */}
      <nav className="crumbs">
          <ul>
          {/* hamburger & links */}
            <li className="crumb"><a href="videos/Algate.mp4" value="nav">Contact</a></li>
            <li className="crumb"><a href="videos/Algate.mp4" value="nav">About us</a></li>
            <li className="crumb"><a href="videos/Algate.mp4" value="nav">Projects</a></li>
          </ul>
        </nav>
        <p>
        <LoremComponent />
          <a>
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
          </a>
        </p>
       
        <p>
          First choice! The only choice <span className="heart">♥️</span> ALGATE
        </p>
      </header>
      <div className="container">
        <section>
          <h1>next section</h1>
          <LoremComponent />
        </section>

        <section>
          <h1>next section</h1>
          <h1>Projects</h1>
          <p className="text=wrapper"></p>
        </section>

        <section>
          <form>
          <h1>Contact us</h1>
          <input type ="text" placeholder ="Name" /><br />
          <input type ="text" placeholder ="surname" /><br />
          <input type ="text" placeholder ="Email" /><br />
          <input type ="number" placeholder ="Telephone number" /><br />
          <textarea type="text"></textarea><br />
          <button >SUBMIT</button>
          </form>
        </section>
        <Footer />
      </div>     
      {/* container ends */}
      </div>
  );
};

export default App;
