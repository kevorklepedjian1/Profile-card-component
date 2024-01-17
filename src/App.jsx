import React, { useState } from 'react';
import img from '../images/bg-pattern-card.svg'
import img1 from '../images/image-victor.jpg'
import img2 from '../images/bg-pattern-bottom.svg'
import img3 from '../images/bg-pattern-top.svg'
import './App.css';

const HeaderBackground = () => (
  <div className="bg-top">
    <img src={img3} alt="" />
  </div>
);

const UserProfile = () => (
  <div className="container">
    <article>
      <img src={img} alt="" />
      <div>
        <img src={img1} alt="" />
      </div>
    </article>

    <article>
      <h1>
        Victor Crest <span>26</span>
      </h1>
      <p>London</p>
    </article>

    <article>
      <ul>
        <li>
          80K <span>Followers</span>
        </li>
        <li>
          803K <span>Likes</span>
        </li>
        <li>
          1.4K <span>Photos</span>
        </li>
      </ul>
    </article>
  </div>
);

const FooterBackground = () => (
  <div className="bg-bottom">
    <img src={img2} alt="" />
  </div>
);

const Attribution = () => (
  <div className="attribution">
    Challenge by{' '}
    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
      Frontend Mentor
    </a>
    . Coded by{' '}
    <a href="https://kevorklepedjian.vercel.app/" target="_blank" rel="noreferrer">
      Kevork Lepedjian
    </a>
    .
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HeaderBackground />
      <UserProfile />
      <FooterBackground />
      <Attribution />
    </>
  );
}

export default App;
