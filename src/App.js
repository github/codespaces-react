import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='App-grid-header'>
          <h1>David Melkonian</h1>
          <h2>Application Development Leader. User Experience Expertise. Accessibility advocate.</h2>
        </div>
      </header>
      <main className='App-main'>
        <div className='row'>
          <div className='App-grid-a samples-links'>
            <ul className='samples'>
              <li><h3>Samples</h3></li>
              <li><a href='https://www.figma.com/proto/IaGShRQDs0RRld07kLP9G5/dewpoint-mobile-app-copy-2?node-id=201%3A315&scaling=min-zoom&page-id=201%3A45&starting-point-node-id=201%3A315&hide-ui=1'>Mobile app <span className='hide-small'>prototype</span></a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/onu-one-uxui-plan.pdf'>3d software <span className='hide-small'>UX/UI plan</span></a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/10/uxui-solution-examples.pdf'><span className='hide-small'>UX/UI</span> Solutioning</a></li>
              <li><a href='https://davemelkcom.files.wordpress.com/2021/11/ux-ui-examples-sketch-3.pdf'><span className='hide-small'>UX/UI</span> Concepts</a></li>
            </ul>
            <ul className='contact'>
              <li><h3>Contact</h3></li>
              <li><a href='https://www.linkedin.com/in/davemelk/'>LinkedIn</a></li>
              <li><a href='https://docs.google.com/document/d/194Y7nvZMypnbAiT-F51o4PI05_dS7X7i26euKBHTyTA/edit?usp=sharing'>Resume</a></li>
              <li><a href='https://dribbble.com/davemelk100'>Dribble</a></li>
              <li><a href='mailto:davemelk@gmail.com?subject = David Melkonian - portfolio'>Contact</a></li>
            </ul>
            <div className='row'>
              <div className='App-grid-c'>
                <div className='title'><h3>Experience</h3></div>
                <div className='bio-text'>
                  <p>My specialties are user experience (UX) strategy, UX leadership, user interface (UI) design, UX design, and software accessibility supporting ADA and WCAG standards for impaired users. I've implemented accessibility (a11y) awareness, development and design practices within large organizations.</p>
                  <p>My experience includes enterprise software delivery with companies/initiatives such as HealthCare.gov, Blue Cross Blue Shield, United Healthcare, Meridian Health, Delta Dental of Michigan, Ford Motor Company, General Motors and more. In addition to my current role, my previous roles include delivery manager, technical lead, accessibility lead, user experience and user interface designer/developer/consultant, scrum master and even technical writer.</p>
                  <p>I am well-versed in Agile software development, including Scrum and SAFe methodologies. I am a Certified Usability Analyst (CUA) by Human Factors International and have obtained Scrum Master certification. I work closely with product owners, executive leadership, vendors and management to ensure successful development and design to deliver world class software.</p>
                  <p>I reviewed, assessed, documented and groomed a11y test results into story cards according to logical groupings of work. I was able to institute an a11y practice and discipline in my current role that hadn't previously existed. I trained developers, testers, tech leads and BAs on what a11y means and how we build software to be accessible from design all the way to production.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='App-footer'>

      </footer>
      </div>
  );
}

export default App;
