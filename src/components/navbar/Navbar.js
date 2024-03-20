import React from 'react'
import "./Navbar.css"
import rasm from "../../assets/images/IMAGE.svg"
import burger from "../../assets/images/burger.svg"
function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
           <div className="navbar__wrapper">
            <div className="navbar__left">
                <img className="navbar__images" src={rasm} alt="logo"/>
                <ul className="navbar__list">
                <li className="navbar__item"><a href="#" className="navbar__link">Home</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">About</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Services</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Articles</a></li>
                <li className="navbar__item"><a href="#" className="navbar__link">Contact</a></li>
               </ul>
            </div>
               <div className="navbar__right">
                <a href = "#" className="navbar__right__link">Cart(0) </a>
                <button className="navbar__right__btn">Get a free quote</button>
               </div>
               <img src={burger} alt="btn" className="burger__btn"/>
           </div>
        </div>
    </div>
  )
}

export default Navbar