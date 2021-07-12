import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Nav from './Nav';
import "./profileScreen.css";
import {auth} from "../firebase";

const ProfileScreen = () => {
    const user = useSelector(selectUser);
    return (  
        <div className = "profilescreen ">
            <Nav/>

          <div className="profileScreen__body">
              <h1>Edit profile</h1>
              <div className="profileScreen__info">
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                   alt=""/>

                   <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                     <div className="profileScreen__plans">
                          <h3>Plans</h3>
                            <button 
                            onClick = {() => auth.signOut()}
                            className = "profileScreen__signout"
                            >Sign out</button>
                     </div>
                   </div>
              </div>
          </div>
        </div>
    );
}
 
export default ProfileScreen;
