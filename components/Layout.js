import Navbar from "./Navbar";
import MySlider from "./MySlider";
import Footer from '../components/Footer';
import Login from '../components/popups/Login';
import Register from '../components/popups/Register';
import React, { useState } from 'react';

function Layout({ children }) {
    const [showPopupLogin, setShowPopupLogin] = useState(false);
    const [showPopupRegister, setShowPopupRegister] = useState(false);
    const handleShowPopupLogin = () => {
      setShowPopupLogin(true);
      setShowPopupRegister(false);
    };
    const handleShowPopupRegister = () => {
      setShowPopupLogin(false);
      setShowPopupRegister(true);
    }    
    return (
      <div>
        <Navbar showPopupLogin={handleShowPopupLogin}/>
        <MySlider />
        <main>{children}</main>
        <Footer />
        <Login showPopupLogin={showPopupLogin} showPopupRegister={handleShowPopupRegister}/>
        <Register showPopupRegister={showPopupRegister} showPopupLogin={handleShowPopupLogin}/>
      </div>
    );
  }
  
  export default Layout;