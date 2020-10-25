import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { AuthContext, AuthContextProvider } from '../Login/AuthContext';
export default function Navbar(){
   const { user } = useContext(AuthContext);
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
      
        </ul>
        </>
    )
}