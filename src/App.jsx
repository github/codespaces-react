import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [zoomed, setZoomed] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <header className={`site-header ${headerScrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <div className="brand">BHAVIK K. RAIYANI</div>
          <nav className="site-nav" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <div className="page-shell">
        <main>
          <section className="hero" id="home">
            <div className="profile-pic">
              <img src="/mypic.jpg" alt="Bhavik K. Raiyani" onClick={() => setZoomed(true)} />
            </div>
            <p className="eyebrow">Senior Full-Stack Engineer</p>
            <h1>
              Driving enterprise modernization with .NET, Azure, and modern front-end
              frameworks.
            </h1>
            <p className="hero-copy">
              I bring 9+ years of experience building scalable enterprise applications across
              e-commerce, finance, property management, and AI. I specialize in cloud migrations,
              microservices, and CI/CD automation for reliable production systems.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                See projects
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact me
              </a>
            </div>
          </section>
          {zoomed && (
            <div className="profile-zoom-overlay" role="dialog" aria-modal="true" onClick={() => setZoomed(false)}>
              <button className="zoom-close" onClick={() => setZoomed(false)} aria-label="Close">
                ×
              </button>
              <img src="/mypic.jpg" alt="Bhavik K. Raiyani" onClick={(event) => event.stopPropagation()} />
            </div>
          )}

          <section className="section about" id="about">
            <div className="section-header">
              <h2>About me</h2>
            </div>
            <p>
              Senior Full-Stack Engineer with 9+ years of expertise in designing, developing, and
              modernizing scalable enterprise applications across e-commerce, finance, property
              management, and AI sectors. Proven track record of leading technical transformations,
              migrating systems to microservices and cloud architectures, and implementing CI/CD
              automation to enhance performance, reliability, and business value.
            </p>
            <p>
              Based in Surat, Gujarat, India. Available for remote consultation and fulltime
              hire. Contact: sendtoraiyani@ymail.com | +91 96010 72320 | linkedin.com/in/bhavik-raiyani
            </p>
          </section>

          <section className="section projects" id="projects">
            <div className="section-header">
              <h2>Featured projects</h2>
            </div>
            <div className="project-grid">
              <article className="project-card">
                <div className="project-tag">Enterprise Portal</div>
                <h3>ActionTruck Booking Platform</h3>
                <p>
                  Built a Canadian truck parts booking portal with scalable backend workflows,
                  Azure Service Bus, NCache, and automated Azure DevOps CI/CD.
                </p>
                <div className="project-meta">.NET Core · Azure · Microservices</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Wealth Tech</div>
                <h3>InvestCloud Wealth Platform</h3>
                <p>
                  Led frontend modernization from AngularJS to Angular and developed modular
                  ASP.NET Core APIs with CQRS, improving test coverage and release velocity.
                </p>
                <div className="project-meta">Angular · ASP.NET Core · Jest</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Commerce</div>
                <h3>Cymax Furniture eCommerce Portal</h3>
                <p>
                  Migrated a legacy .NET Framework portal to .NET Core with Azure integration,
                  reducing latency and supporting higher traffic volumes.
                </p>
                <div className="project-meta">Azure · .NET Core · CI/CD</div>
              </article>

              <article className="project-card">
                <div className="project-tag">AI Surveillance</div>
                <h3>CCTV Tracking System</h3>
                <p>
                  Developed an AI-powered surveillance system for mask violation detection using
                  Azure Cognitive Services and AWS Rekognition.
                </p>
                <div className="project-meta">Azure Cognitive Services · AWS · AI</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Booking System</div>
                <h3>Restaurant Booking Management</h3>
                <p>
                  Built a platform for table reservations and online food ordering with admin
                  panels and reporting analytics.
                </p>
                <div className="project-meta">Web APIs · Reporting · Analytics</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Transportation</div>
                <h3>Bus Booking Management System</h3>
                <p>
                  Developed a system for bus listings, schedules, seat availability, and real-time
                  booking confirmations.
                </p>
                <div className="project-meta">Real-time Processing · Payments</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Property Management</div>
                <h3>Property Management Portal (USA)</h3>
                <p>
                  Designed architecture and repository pattern for U.S. housing association
                  management with Excel import and Azure Functions.
                </p>
                <div className="project-meta">Azure Functions · Cosmos DB</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Logistics</div>
                <h3>Consignment & Logistics Management</h3>
                <p>
                  Built consignment booking, real-time tracking, and shipment management
                  workflows with issue resolution features.
                </p>
                <div className="project-meta">Tracking · Workflows · Reporting</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Safety Compliance</div>
                <h3>SAFE-ZYDUS Platform</h3>
                <p>
                  Developed attendance, incident management, site inspection, and safety
                  compliance modules with RBAC authorization.
                </p>
                <div className="project-meta">RBAC · Compliance · Inspections</div>
              </article>

              <article className="project-card">
                <div className="project-tag">Trading</div>
                <h3>Copy Trading Platform (Singapore)</h3>
                <p>
                  Integrated OANDA API for automated trading actions, allowing users to follow
                  experienced traders and replicate trades.
                </p>
                <div className="project-meta">OANDA API · Automated Trading</div>
              </article>
            </div>
          </section>

          <section className="section experience" id="experience">
            <div className="section-header">
              <h2>Experience</h2>
            </div>
            <div className="experience-grid">
              <article className="experience-card">
                <h3>Senior Software Engineer</h3>
                <p className="experience-company">Cosnet Global Solutions — Aug 2024 - Present</p>
                <p>
                  Lead development for ActionTruck Portal, a Canadian truck parts booking platform
                  serving 10,000+ monthly users. Improved application performance by 30% by
                  optimizing the .NET Core backend and Entity Framework workflows and introducing
                  Azure Service Bus and NCache for scalable, asynchronous processing. Automated
                  CI/CD pipelines using Azure DevOps, reducing deployment time by 25%.
                </p>
              </article>

              <article className="experience-card">
                <h3>Senior .NET Developer</h3>
                <p className="experience-company">Volumetree — Apr 2023 - Jul 2024</p>
                <p>
                  Modernized SaaS tooling by migrating monolithic APIs to microservices architecture,
                  enhancing system reliability by 40%. Integrated Azure Cloud Storage for improved
                  data management and performance. Awarded "Most Consistent Performer of the Year
                  (2024)" for delivering high-impact enhancements ahead of schedule.
                </p>
              </article>

              <article className="experience-card">
                <h3>Senior Software Developer</h3>
                <p className="experience-company">Turing — Jun 2022 - Apr 2023</p>
                <p>
                  Led frontend modernization of InvestCloud Wealth Management Platform from
                  AngularJS to Angular 9+. Designed modular APIs using ASP.NET Core and CQRS
                  pattern, increasing test coverage by 35% with Jest. Automated CI/CD processes
                  using Git, reducing release cycles by 20%.
                </p>
              </article>

              <article className="experience-card">
                <h3>Senior Software Developer</h3>
                <p className="experience-company">Optimus Information Inc. — Apr 2021 - Jun 2022</p>
                <p>
                  Migrated the Cymax eCommerce portal from .NET Framework to .NET Core, modernizing
                  the architecture and integrating Azure Service Bus and NCache to enable scalable,
                  asynchronous processing—resulting in a 40% reduction in latency while supporting
                  500K+ users. Integrated ElasticPath API and BuzzerVoice analytics for enhanced
                  scalability and customer insights. Implemented Azure CI/CD pipelines and Bitbucket
                  automation for streamlined deployments.
                </p>
              </article>

              <article className="experience-card">
                <h3>Senior Software Engineer</h3>
                <p className="experience-company">Avishkar IT Services — Mar 2020 - Apr 2021</p>
                <p>
                  Developed AI-powered CCTV Tracking System using Azure Cognitive Services,
                  reducing manual monitoring by 60%. Built Angular dashboards for violation
                  analytics and automated image processing via Azure Blob Storage. Mentored 3
                  junior developers and conducted code reviews to ensure quality standards.
                </p>
              </article>

              <article className="experience-card">
                <h3>Software Engineer</h3>
                <p className="experience-company">TekGrid Consulting Services Pvt. Ltd. — July 2018 - Mar 2020</p>
                <p>
                  Built and maintained business-critical web applications using ASP.NET MVC and
                  Angular. Improved application stability by resolving complex production issues.
                </p>
              </article>

              <article className="experience-card">
                <h3>Jr. Software Developer</h3>
                <p className="experience-company">ASK-EHS Engineering & Consultancy — July 2015 - Mar 2018</p>
                <p>
                  Built and maintained business-critical web applications using ASP.NET MVC and
                  Angular. Improved application stability by resolving complex production issues.
                </p>
              </article>
            </div>
          </section>

          <section className="section skills" id="skills">
            <div className="section-header">
              <h2>Skills</h2>
            </div>
            <div className="skills-categories">
              <div className="skill-category">
                <h3>Backend & Frameworks</h3>
                <div className="skill-grid">
                  <span>.NET Core</span>
                  <span>ASP.NET MVC</span>
                  <span>C#</span>
                  <span>Web API</span>
                  <span>Entity Framework</span>
                  <span>LINQ</span>
                  <span>CQRS</span>
                  <span>Microservices</span>
                  <span>REST APIs</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-grid">
                  <span>Angular (v8+)</span>
                  <span>ReactJS</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>jQuery</span>
                  <span>Bootstrap</span>
                  <span>AngularJS</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Cloud & DevOps</h3>
                <div className="skill-grid">
                  <span>Microsoft Azure</span>
                  <span>Azure Service Bus</span>
                  <span>NCache</span>
                  <span>Azure App Services</span>
                  <span>Azure Functions</span>
                  <span>Azure Blob Storage</span>
                  <span>Cosmos DB</span>
                  <span>Azure Pipelines</span>
                  <span>AWS (EC2, S3, RDS, IAM, VPC, SES)</span>
                  <span>Docker</span>
                  <span>CI/CD</span>
                  <span>GitHub Actions</span>
                  <span>Azure DevOps</span>
                  <span>Bitbucket Pipelines</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Databases</h3>
                <div className="skill-grid">
                  <span>SQL Server</span>
                  <span>Cosmos DB</span>
                  <span>PostgreSQL</span>
                  <span>MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Tools & Methods</h3>
                <div className="skill-grid">
                  <span>Git</span>
                  <span>Jira</span>
                  <span>Postman</span>
                  <span>Visual Studio</span>
                  <span>VS Code</span>
                  <span>Agile/Scrum</span>
                  <span>Unit Testing</span>
                  <span>Clean Architecture</span>
                </div>
              </div>
            </div>
          </section>

          <section className="section education" id="education">
            <div className="section-header">
              <h2>Education</h2>
            </div>
            <div className="education-grid">
              <article className="education-card">
                <h3>Master of Computer Applications (MCA)</h3>
                <p>G.H. Patel Dept. of Computer Science — 2013</p>
              </article>
              <article className="education-card">
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Veer Narmad South Gujarat University — 2010</p>
              </article>
            </div>
          </section>

          <section className="section certifications" id="certifications">
            <div className="section-header">
              <h2>Certifications</h2>
            </div>
            <div className="certifications-list">
              <div className="certification-item">
                <h3>Microsoft Azure Fundamentals (AZ-900)</h3>
              </div>
              <div className="certification-item">
                <h3>Microservices Architecture & Implementation on .NET 5</h3>
              </div>
              <div className="certification-item">
                <h3>ASP.NET Zero: Development with ASP.NET Core & Angular</h3>
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div className="contact-panel">
              <div>
                  <h2>Get in touch</h2>
                <p>
                  Based in Surat, Gujarat, India. I am available for remote consultation and fulltime
                  hire. If you need an engineer with enterprise experience in cloud,
                  microservices, and full-stack development, let’s talk.
                </p>
              </div>
              <div className="contact-links">
                <a href="mailto:sendtoraiyani@ymail.com" className="btn btn-primary">
                  sendtoraiyani@ymail.com
                </a>
                <a href="tel:+919601072320" className="btn btn-secondary">
                  +91 96010 72320
                </a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/bhavik-raiyani" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="mailto:sendtoraiyani@ymail.com">Email</a>
            </div>
          </section>
        </main>

        <footer className="site-footer">
          © 2026 Bhavik K. Raiyani — Senior Full-Stack Engineer.
        </footer>
      </div>
    </div>
  );
}

export default App;
