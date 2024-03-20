import React from 'react'
import "./Service.css"
import service from "../../assets/images/service1.png"
import service2 from "../../assets/images/service2.png"
import service3 from "../../assets/images/service3.png"

function Service() {
  return (
   <div id="service">
     <div className="container">
         <div className="service__wrapper">
            <div className="service__top">
                <h2 className="service__title">Our Services</h2>
                <button className="service__btn">Explore services</button>
            </div>
            <div className="service__cards">
                 <div className="service__card">
                    <img src={service} alt="" className="service__img" />
                    <h3 className="service__card__title">House cleaning</h3>
                    <p className="service__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                 </div>
                 <div className="service__card">
                    <img src={service2} alt="" className="service__img" />
                    <h3 className="service__card__title">House cleaning</h3>
                    <p className="service__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                 </div>
                 <div className="service__card">
                    <img src={service3} alt="" className="service__img" />
                    <h3 className="service__card__title">House cleaning</h3>
                    <p className="service__text">Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.</p>
                 </div>
            </div>
         </div>
     </div>
   </div>
  )
}

export default Service