import './App.css';
// import video from "./videos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALGATE FIRE</h1>

        <img src="logo192.png" className="App-logo" alt="logo" />
        {/* need to add video mp4 from linux computer */}
        <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + '/home/paulzolik/react-projects/Algatelogovideo.mp4/Algate.mp4'} type="video/mp4" />

          Your browser does not support the video tag
        </video>
      {/* navbar starts here */}
        <nav className="crumbs">
          <ul>
          {/* hamburger & links */}
            <li className="crumb"><a href="#" value="nav">Contact</a></li>
            <li className="crumb"><a href="#">About us</a></li>
            <li className="crumb"><a href="#">Projects</a></li>
          </ul>
        </nav>
        <p>
          <a
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
        </section>
        <section>
          <h1>next section</h1>
        </section>
        <section>
          <h1>next section</h1>
        </section>
        <footer className="crumbs">
        <li className="crumb"><a href="#">Twitter</a></li>
            <li className="crumb"><a href="#">Facebook</a></li>
            <li className="crumb"><a href="#">Tinder</a></li>
        <h3>Copycat 2023</h3>
        </footer>
      </div>     
      {/* container ends */}
      </div>
  );
}

export default App;
