import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";

import HomeScreen from './components/homescreen';
import Login from './components/loginscreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/profileScreen';


function App() {
  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();

  useEffect(() => {
     const unsubscribe = auth.onAuthStateChanged(userAuth => {
       if(userAuth){
         //user logged in 
         dispatch(login({
           uid: userAuth.uid,
           email : userAuth.email,

         }));
       } else {
         // user logged out
         dispatch(logout());
       }
     });

     return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
     <Router>
       {
         !user ? (
           <Login/>
         ) : 
         
         (
          <Switch>
            <Route path = "/profile">
               <ProfileScreen/>
            </Route>
          <Route exact path = "/">
           <HomeScreen/>
          </Route>
          </Switch>
         )
       }
      
     </Router>
    </div>
  );
}

export default App;
