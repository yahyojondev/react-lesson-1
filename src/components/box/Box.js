import React from 'react'
import "./Box.css"
import rasm  from  "../../assets/images/box.png"
import boxphone from "../../assets/images/phonelogo.svg"

function Box() {
  return (
    <div id="box">
        <div className="container">
            <div className="box__wrapper">
                <img src={rasm} alt="" className="box__img"/>
                <div className="box__right">
                    <p className="box__text">Covid-19 sanitization</p>
                    <h2 className="box__title">We follow guidelines to keep you safe from the COVID-19 virus</h2>
                    <p className="box__text">Lobortis mattis odio leo eget mauris met aliquet semper molestie sollicitudin congue massa mauris lectus.</p>
                 <form action="" className="box__forms">
                    <button className="box__btn">Get a free quote</button>
                    <img src={boxphone} alt="" className="box__right__img" />
                    <div className="box__number">
                        <span className="number__text">Call us now</span>
                        <p className="box__number">(414) 567 - 2109</p>
                    </div>
                 </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Box