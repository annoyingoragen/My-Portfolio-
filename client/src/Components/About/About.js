import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from "react-redux";
import './About.scss';
import AppWrap from '../Wrapper/AppWrap';
const About = () => {
  
  const { user } = useSelector((state) => state.user);
  const abouts=user.about;
  console.log(abouts)
  return (
    <>
    <h2 className="head-text">I Know that <span>Good App</span> <br />means  <span>Good Business</span></h2>

    <div className="app__profiles">
    {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className="app__profile-item"
          key={about.title }
        >
          <img src={about.imgUrl.url} alt={about.title} />
          <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
        </motion.div>
       ))}
    </div>
  </>
);
};

export default AppWrap (About,"about");