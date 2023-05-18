import './App.css';
import arrow from './resource/arrow.png'
import menu from './resource/menu.png'
import script from './script.js'

function App() {
  return (
    <div className="App">
     <script src={script}></script>
      <nav class="navbar">
          <div className="navbar-brand"><a href="index.html">KKS</a></div>
          <button class="nav-toggle">
            <img src={menu} alt="Menu icon"/>
          </button>
         <ul class="navbar-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Projects</a></li>
          <li>
              <a href="#" className="contact-me">
              Contact
              <img src={arrow} alt="Contact icon"/>
              </a>
          </li>
          </ul>
      </nav>
      <div className="content">
          <h1>Test</h1>
      </div>
      <footer>
        <div className="row">
            <div className="footer-parent-section">
                <div className="row">
                    <div className="footer-inner-section">
                    <h4>Navigations</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    </div>
                    <div className="footer-inner-section">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                    </div>
                    <div className="footer-inner-section">
                    <h4>Social Media</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">LinkedIn</a></li>
                    </ul>
                    </div>
                    <div className="footer-inner-section-below">
                    <h4>Information</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="footer-parent-section">
                <div className="footer-right-inner-section">
                <h4>Be Innovative,</h4>
                <h3>Be creative,</h3>
                <h2>Be Solutive</h2>
                <div className='newsletter'>
                    <input type="email" height="30px" width="300px" placeholder="Enter your email address"/>
                    <input type="image" src={arrow} alt="Submit"/>
                </div>
                </div>
            </div>
      </div>
      <p>&copy; 2023 KKS. All rights reserved.</p>
      </footer> 
      <script src={script}></script> 
    </div>
  );
}

export default App;
