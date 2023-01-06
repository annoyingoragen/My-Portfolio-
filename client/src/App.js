import './App.scss';
// import {Route,Routes } from 'react-router-dom';
// import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
// import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import Project from './Components/Project/Project';
import Navbar from './Components/Navbar/Navbar';
import store from './store';
import { loadUser } from './actions/userAction';
import { useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

function App() {
  console.log("e")
  useEffect(()=>{
    console.log("loading user")
    store.dispatch(loadUser());

  },[]);  
  
  const { isLoading } = useSelector((state) => state.user);
  return (
        <>
          {isLoading==null || isLoading ? (
            <div className='CircularProgressContainer'>
                 <CircularProgress className='CircularProgress' color="secondary" size={100}   thickness={2}/>
              </div>
            ):(
              <div className='app'>
                  
                    <Navbar />
                    <Header/>
                    <About/>
                    <Project/>
                    <Skills/>
                    {/* <Testimonial/> */}
                    <Footer/>
                  
              </div>
          )}
        </>
  );
}

export default App;
