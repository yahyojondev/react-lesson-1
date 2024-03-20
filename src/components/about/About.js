import React from 'react'
import "./About.css"
import  rasm from"../../assets/images/about1.png"
import  rasm2 from"../../assets/images/about2.png"
import  rasm3 from"../../assets/images/about3.png"

function About() {
  return (
   <div id="about">
    <div className="container">
        <div className="about__wrapper">
            <div className="about__top">
                <h2 className="about__title">About Us</h2>
                <p className="about__text">Sagittis nibh scelerisque vitae eget vulputate sem elementum sed neque nisi felis non ultrices massa id egestas quam velit pretium nu.</p>
            </div>
            <div className="about__cards">
                <div className="about__card">
                    <img src={rasm} alt="" className="about__img" />
                    <h3 className="about__card__title">1. Schedule online</h3>
                    <p className="about__card__text">Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
                </div>
                <div className="about__card">
                    <img src={rasm2} alt="" className="about__img" />
                    <h3 className="about__card__title">2. Pay online easily</h3>
                    <p className="about__card__text">Vitae ut accumsan blandit ullamcorperolm suscipit dui gravida amet at nunc.</p>
                </div>
                <div className="about__card">
                    <img src={rasm3} alt="" className="about__img" />
                    <h3 className="about__card__title">3. Get your house cleaned</h3>
                    <p className="about__card__text">Nunc maecenas sollicitudin metus tellus mattis sed porttitor cursus eleifend.</p>
                </div>
            </div>
            <div className="about__bottom">
                  <button className="about__btn">Get a free quote</button>
                  <button className="about__btn">Explore services</button>
            </div>
        </div>
    </div>
   </div>
  )
}

export default About