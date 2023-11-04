import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ALGATE FIRE header</h1>
        <video autoPlay muted loop className='App-logo-video'>
          <source src ={process.env.PUBLIC_URL + 'videos/algatelogovideo.mp4'} type="video/mp4" />
          Your browser does not support the video tag
        </video>
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          First choice the only choice <span className="heart">♥️</span> ALGATE
        </p>
      </header>

      <div className="container">
        <section>
          <h1>next section</h1>
        </section>
      </div>
       h
    </div>
  );
}

export default App;
