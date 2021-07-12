import React, { useState } from 'react';
import "./loginscreen.css";
import SignInScreen from './signinscreen';

const Login = () => {

    const [signIn, setSignIn] = useState(false);
    return (  
        <div className = "login">
          <div className="loginScreen__background">
              < img 
              className = "loginSCreen__logo"
              src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
              alt=""/>

              <button 
              className ="loginScreen__button"
              onClick = {() => setSignIn(true)}
              >Sign In</button>
               <div className = "loginScreen__gradient"/>
          </div>

          <div className="loginScreen__body">
              { signIn ? (
                  <SignInScreen/>
              ) : (
                <>
                <h1>
                    Unlimited films , Tv programmes and more.
                </h1>
                <h2>Watch anywhere cancel any time.</h2>
  
                <h3>
                    Ready to watch ? Enter your email to  create or 
                    restart your membership.
                </h3>
  
                <div className="loginSCreen__input">
                    <form action="">
                        <input type="email"
                        placeholder = "Email Address"
                        />
                        <button onClick = {() => setSignIn(true)} className = "loginSCreen__getstarted">
                            GET STARTED
                        </button>
                    </form>
                </div>
                </>
              )}
              
          </div>
        </div>
    );
}
 
export default Login;
