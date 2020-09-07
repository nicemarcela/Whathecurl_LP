import React from 'react';
import './App.css';
import Curl from './img/curl.png';
import Waves from './img/gradient-waves.png';
import Like from './img/heart.png';
import Folder from './img/lightpinkfolder1.png';
import Polish from './img/purplepolish.png';
import Icon from './img/icon.png';



function App() {
  return (
    <div className="App">
      <div className="logo">
      <img className="icon" src={Icon} alt="" />
      <h1>What The Curl</h1>
      </div>
      
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
          Curated curl lifestyle and inspo <br/>landing on your screen soon.
        </p>
      </header>


      <div className="contact-us" id="mc_embed_signup">
        <form action="https://whathecurl.us17.list-manage.com/subscribe/post?u=dcb0fe74937e55e28c5843b7a&amp;id=8fa0cc2c6e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h4>Make sure to get your pass</h4>
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                <input
                  required placeholder="YOUR EMAIL" type="email" name="EMAIL" id="mce-EMAIL" />
              </label>

            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              <input type="text" name="b_dcb0fe74937e55e28c5843b7a_8fa0cc2c6e" tabIndex="-1" defaultValue="" />
            </div>
            <div className="clear">
              <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="button">
                <div className="btn-content">
                  <p>Go</p>
                </div>
              </button>

            </div>
          </div>
        </form>
      </div>




      <footer>
        <div className="footer">
          <a style={{ textDecoration: "none" }} href="https://www.instagram.com/whathecurl" target="_blank" rel="noopener noreferrer">@whathecurl</a>
          <img className="heart" src={Like} alt="" />
        </div>
      </footer>
      {/* <img style={{width: "200px"}} src={Minhoca} alt="" /> */}
    </div >

  );
}

export default App;
