import React from 'react'
import "./footer.css"
import footerimg from "../../assets/images/footer.four.png"
import secondimg from "../../assets/images/IMAGE.svg"

function Footer() {
  return (
    <div id="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <ul className="footer__list">
                        <li className="footer__item">
                            <h4 className="footer__title">Quality cleaning for your home</h4>
                            <ul className="footer__item__list">
                                <li className="footer__item__list__item"><a href="#" className="footer__link">Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</a></li>
                                <li className="footer__item__list__item"><a href="#" className="footer__link"><img src={footerimg} alt="" /></a></li>
                            </ul>
                        </li>
                        <li className="footer__item">
                            <h5 className="footer__title__one">Contact us</h5>
                            <ul className="footer__item__list">
                                <li className="footer__item__list__item"><a href="#" className="footer__link">1827 Nickel Road, Los Angeles, CA, 90017, United States</a></li>
                                <li className="footer__item__list__item"><a href="#" className="footer__link">(414) 567 - 2109</a></li>
                                <li className="footer__item__list__item"><a href="#" className="footer__link">contact@cleaning.com</a></li>
                            </ul>
                        </li>
                        <li className="footer__item">
                            <h5 className="footer__title__one">Hours</h5>
                            <ul className="footer__item__list">
                                <li className="footer__item__list__item"><a href="#" className="footer__link  day__link"><span>Monday to Friday</span>6:00 AM - 9:00 PM</a></li>
                                <li className="footer__item__list__item"><a href="#" className="footer__link  day__link"><span>Saturday & Sunday</span>8:00 AM - 8:00 PM</a></li>
                            </ul>
                        </li>
                        <li className="footer__item">
                            <h5 className="footer__title__one">Get a free estimate</h5>
                            <ul className="footer__item__list">
                                <li className="footer__item__list__item"><a href="#" className="footer__link number__link">(414) 567 - 2109</a></li>
                                <li className="footer__item__list__item footer__btn__item"><a href="#" className="footer__link">Lorem ipsum dolor sit amet ectetur adipiscing elit, sed do eiusmod.</a></li>
                                <li className="footer__item__list__item"><a href="#" className="footer__link footer__btn">Request a free quote</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer__bottom">
                        <img className='footer__bottom__img' src={secondimg} alt="" />
                    <div className="footer__bottom__right">
                        <p className="footer__bottom__text">Copyright © Cleaning X </p>
                        <a href="#" className="footer__bottom__link">BRIX Templates</a>
                        <p className="footer__bottom__text">- Powered by</p>
                        <a href="#" className="footer__bottom__link">Webflow Licenses</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer