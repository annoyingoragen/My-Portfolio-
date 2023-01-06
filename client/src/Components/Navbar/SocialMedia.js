import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiFillProfile} from 'react-icons/ai';
const SocialMedia = () => (
  <div className="app__social">
     <div>
    <a href='https://drive.google.com/file/d/1WQffCPbT4d4MemSaok4Dye-j5PgTV5CZ/view?usp=sharing'>    <AiFillProfile /></a>
   
    </div>
    <div>
    <a href='https://twitter.com/dotdotsie'>    <BsTwitter /></a>
   
    </div>
    <div>
    <a href='https://www.facebook.com/profile.php?id=100009217691650'>  <FaFacebookF /> </a>
     
    </div>
    <div>
    <a href='https://www.instagram.com/annoyingorangen/'>  <BsInstagram /> </a>
     
    </div>
  </div>
);

export default SocialMedia;