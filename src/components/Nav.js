import React,{useState} from 'react';
import { useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show ,handleShow] = useState(false);

    const transitionNavbar = () => {
      if(window.scrollY > 100){
          handleShow(true);
      }
      else{
          handleShow(false);
      }
    };

    useEffect(() => {
       window.addEventListener("scoll",transitionNavbar);
       return () => window.addEventListener("scroll",transitionNavbar);
    },[]);

    return (
        <div className = {`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
            <img 
            className = "nav__logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc8h6mqLEWAPvTTgzQo2Fsu-xRuj_YbpQYH57pWXPgQlSq9cU4l5cVFFrZaYjS3oRM4YY&usqp=CAU"
             alt="netflix logo"/>

            <img 
            className = "nav__avatar"
            src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-couple-laughing-avatar-elements-png-image_4080240.jpg" 
            alt=""/>

            </div>
           
        </div>
    )
}

export default Nav;
