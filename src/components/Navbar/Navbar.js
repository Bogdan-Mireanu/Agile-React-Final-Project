import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar(){
    return (
        <ul className="nav bg-light">
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
    )
}