import React,{useState} from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import "./Nav.css";

function Nav() {
    const [show ,handleShow] = useState(false);

    const history = useHistory();

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
            onClick = {() => history.push("/")}
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
             alt="netflix logo"/>

            <img 
            className = "nav__avatar"
            onClick = {() => history.push('/profile')}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt=""/>
            </div>
           
        </div>
    )
}

export default Nav;
