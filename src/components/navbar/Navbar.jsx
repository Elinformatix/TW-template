import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { ConnectWallet } from "@thirdweb-dev/react";


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Vote</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        
        <ConnectWallet accentColor="#f213a4" colorMode="light" />
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Vote</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
          <ConnectWallet accentColor="#f213a4" colorMode="light" />
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
