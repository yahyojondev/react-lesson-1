import React from 'react'
import "./Contact.css"
import rasm from "../../assets/images/phonelogo.svg"

function Contact() {
  return (
    <div id="contact">
        <div className="container">
            <div className="contact__wrapper">
                 <div className="contact__left">
                     <h2 className="contact__title">Contact Us</h2>
                     <p className="contact__text">In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.</p>
                     <div className="contact__form">
                        <img className='contact__img' src={rasm} alt="" />
                        <div className="contact__number">
                            <p className="number__text">Call us now</p>
                            <a href='#' className="number__link">(414) 567 - 2109</a>
                        </div>
                        
                     </div>
                     <h4 className="contact__four__title">Not convinced yet?</h4>
                        <p className="contact__text">Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.</p>
                        <button className="contact__btn">Browse our packages</button>
                 </div>
                 <div className="contact__right">
                    <form action="" className="contact__right__forms">
                       <form className="input__form" action="">
                         <p className="form__text">Full name</p>
                         <input type="text" />
                       </form>
                       <form className="input__form" action="">
                         <p className="form__text">Phone number</p>
                         <input type="text" />
                       </form>
                       <form className="input__form" action="">
                         <p className="form__text">Address</p>
                         <input type="text" />
                       </form>
                       <form className="input__form" action="">
                         <p className="form__text">Email</p>
                         <input type="text" />
                       </form>
                       <form className="input__form" action="">
                         <p className="form__text">Requested service</p>
                         <input type="text" />
                       </form>
                       <form className="input__form" action="">
                         <p className="form__text">Day of service</p>
                         <input type="text" />
                       </form>
                    </form>
                    <form className="input__form" action="">
                      <p className="form__text">Add a note</p>
                      <textarea name="" id="" cols="30" rows="10"></textarea>
                    </form>
                    <button className="contact__right__btn">Submit message</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Contact