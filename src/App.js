import React from 'react';
import './App.css';
import Curl from './img/curl.png';
import Waves from './img/gradient-waves.png';
import Like from './img/heart.png';
import Folder from './img/lightpinkfolder1.png';
import Polish from './img/purplepolish.png';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img className="curl" src={Curl} alt="" />
        <img className="waves" src={Waves} alt="" />
        {/* <img className="star" src={Star} alt="" /> */}
        
        <img className="polish" src={Polish} alt="" />
        <a href="https://www.instagram.com/whathecurl" target="_blank" rel="noopener noreferrer">
          <img title="Instagram" className="folder" src={Folder} alt="" />
        </a>
        {/* <img  className="folder2" src={Folder} alt="" /> */}
        <p>
          Curated curl lifestyle and inspo <br />landing on your screen soon.
        </p>
      </header>

      <div className="contact-us">
        <form>
          <h4>Make sure to get your pass</h4>
          <label>
            <input style={{ fontFamily: "Comfortaa" }} placeholder="Email" type="email" name="customerEmail" />
          </label>
          <button className="" type="submit" >
            <img src="https://img.icons8.com/ios/28/000000/starred-ticket.png" alt="" />
          </button>
        </form>
      </div>

      <footer>
        <div className="footer">
          <a style={{ textDecoration: "none" }} href="https://www.instagram.com/whathecurl" target="_blank" rel="noopener noreferrer">@whathecurl</a>
          <img className="heart" src={Like} alt="" />
        </div>
      </footer>
      {/* <img style={{width: "200px"}} src={Minhoca} alt="" /> */}
    </div>
  );
}

export default App;
