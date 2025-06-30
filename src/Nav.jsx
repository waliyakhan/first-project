import './Nav.css';

import React from 'react'

function Nav() {
  return (
    <>
    <div className="navbar">
  <img className="logo" src="/logoo.png" alt="LOGO" />

      <div className="nav-links">
        <a href="./Home.jsx">HOME</a>
        <a href="./About.jsx">ABOUT</a>
        <a href="./Product.jsx">PRODUCTS</a>
        <a href="./Contact.jsx">CONTACT</a>
      </div>
     
    </div>
     <div>
        <img  className="bg" src="/img2.webp" alt="bg" />
        
      </div>
    </>
  )
}

export default Nav