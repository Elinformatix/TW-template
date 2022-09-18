import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/SUNSETWALLET.png';
import './header.css';
import { ConnectWallet } from "@thirdweb-dev/react";
import Card from '../../components/Card';


const Header = () => (
  <div className="gpt3__header section__padding" id="Header">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Enroll in our students NFT Program</h1>
      <p>With more than 16 years of experience. We offer a wide range of courses, downwinds, equipment rentals and kitetrips.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your ETH Address" />
        <ConnectWallet accentColor="#f213a4" colorMode="light" />
      </div>


    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
