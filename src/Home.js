import "./Home.css";
import Icons from "./Icons";
import About from "./About";
import Project from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import ProfilePic from "./assests/Pavan Passport size pic.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Home() {
  return (
    <div>            
      <header className="navbar navbar-expand-lg navbar-light bg-white fixed-top px-3 shadow-sm">
        <b className="navbar-brand">PAVAN KUMAR</b>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#home" className="nav-link">HOME</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="#project" className="nav-link">PROJECTS</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">CONTACT</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="bcolor">
          <div className="container d-flex  flex-column flex-md-row align-items-center justify-content-between">
            <div id="home" className="text-center text-md-start">
                <h2 id="name">I'M PAVAN KUMAR KARIMI</h2>
                <p align="justify" className="container pt-1 fs-5">
                    A passionate software developer skilled in Python, SQL, C and front-end technologies like HTML, CSS, and JavaScript, ReactJS. I specialize in building intelligent solutions, including machine learning applications, automation tools, and dynamic websites. Explore my projects to see how I solve real-world problems with innovative technology.
                </p>
            </div>
            <div className="image-container text-center">
            

              <img src={ProfilePic} alt="Round Profile" className="img-fluid" />

            </div>
          </div>
      </div>

      <div className="pages">
          <div >
              <About/>
          </div>
          <div className="container" id="skills">
                <Skills/>
            </div>
          <div>
              <Project/>
          </div>
      </div>
      <div>
        <Contact/>
      </div>
      <footer id="footer">
          <p>&copy; 2025 Pavan Kumar. All rights reserved.</p>
        <Icons/>
      </footer>
     </div>
  );
}
