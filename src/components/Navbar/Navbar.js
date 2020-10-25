import React, {useContext} from 'react';
import {Link, Redirect, useLocation } from 'react-router-dom';
import { AuthContext, AuthContextProvider } from '../Login/AuthContext';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Button } from 'react-bootstrap';
export default function Navbar(){
   const { isAuthenticated, user,  updateUser } = useContext(AuthContext);

    
   async function signOut(){
       await firebase.auth().signOut().then(function () {
          console.log('User signed out...');           
       });
   }
    
    if(!isAuthenticated){
        return <Redirect to='/'></Redirect>
    }
    return (
        <>
        
        <ul className="nav bg-light">
            {user && <div>Hi, {user.email}</div>}
            <li className="nav-item">
                <Link className='' to='/'><p className="nav-link h5 " href="#">Home</p></Link>
            </li>
            <li className="nav-item">
                <Link className='' to='/wishlist'><p className="nav-link h5" href="#">Wishlist</p></Link>
            </li>
            <li className="nav-item">
                <Link className='' to='/search'><p className="nav-link h5" href="#">Search</p></Link>
            </li>
                {user && <Button onClick={signOut}>Sign out</Button>} 
        </ul>
        </>
    )
}