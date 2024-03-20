import React from 'react'
import "./Hero.css"
import heroimg from "../../assets/images/phonelogo.svg"
import herorightimg from '../../assets/images/heroimg.png'

function Hero() {
  return (
    <div id="hero">
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__wrapper__left">
                    <h1 className="hero__title">Quality cleaning for your home</h1>
                    <p className="hero__text">Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.</p>
                    <form action="" className="hero__forms">
                        <button className="hero__btn">Get a free quote</button>
                        <img src={heroimg} alt="" className="hero__img" />
                        <div className="number__wrapper">
                            <p className='hero__number__text'>Call us now</p>
                            <span className="hero__number">(414) 567 - 2109</span>
                        </div>
                    </form>
                </div>
                <div className="hero__wrapper__right">
                    <img src={herorightimg} alt="" className="hero__right__img" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero