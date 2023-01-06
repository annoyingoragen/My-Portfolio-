import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, sendEmail } from '../../actions/userAction';
import emailicon from '../../Images/email.png';
import mobile from '../../Images/mobile.png'
import AppWrap from '../Wrapper/AppWrap';
import './Footer.scss';
import { useAlert } from "react-alert";
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { success,error } = useSelector((state) => state.user);
  const alert = useAlert();
  const { username, email, message } = formData;
  const dispatch = useDispatch();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
    dispatch(sendEmail(formData)); 
  }
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Thank you for getting in touch");
    }
  }, [dispatch, alert, error, success]);
  return (
    <>
    <h2 className="head-text">Take a coffee & chat with me</h2>

    <div className="app__footer-cards">
      <div className="app__footer-card ">
        <img src={emailicon} alt="email" />
        <a href="mailto:Fatimaaliforwork@gmail.com" className="p-text">Fatimaaliforwork@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={mobile} alt="phone" />
        <a href="tel:+92 (307) 5238297" className="p-text">+92 (307) 5238297</a>
      </div>
    </div>
    
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
        </div>
        <div>
          <textarea
            className="p-text"
            placeholder="Your Message"
            value={message}
            name="message"
            onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>Send Message</button>
      </div>
    
  </>
);
};
export default AppWrap(Footer,'contact');