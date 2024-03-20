import React from 'react'
import "./Article.css"
import rasm from "../../assets/images/article1.png"
import rasm2 from "../../assets/images/article2.png"

function Article() {
  return (
    <div id="article">
        <div className="container">
             <div className="article__wrapper">
                  <div className="article__top">
                    <h2 className="article__title">Articles & resources</h2>
                    <div className="article__buttons">
                        <button className="article__btn btn__article">Get a free quote</button>
                        <button className="article__btn">Browse articles</button>
                    </div>
                  </div>
                  <div className="article__cards">
                    <div className="article__card">
                       <img src={rasm}alt="" className="article__img" />
                       <div className="article__card__content">
                          <h3 className="article__card__title">8 best vacuum cleaners to clean any mess for your home in 2022</h3>
                          <p className="article__card__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                          <div className="article__forms">
                              <h5 className="article__card__title__one">Jan 28, 2022</h5>
                          <button className="article__card__btn"></button>
                          </div>
                       </div>
                    </div>
                    <div className="article__card">
                       <img src={rasm2}alt="" className="article__img" />
                       <div className="article__card__content">
                          <h3 className="article__card__title">8 best vacuum cleaners to clean any mess for your home in 2022</h3>
                          <p className="article__card__text">Lorem ipsum dolor sit amet conse ctetur adip iscing elit justo quis odio sit sit ac port titor sit males.</p>
                         <div className="article__forms">
                              <h5 className="article__card__title__one">Jan 28, 2022</h5>
                          <button className="article__card__btn"></button>
                          </div>
                       </div>
                    </div>
                  </div>
             </div>
        </div>
    </div>
  )
}

export default Article