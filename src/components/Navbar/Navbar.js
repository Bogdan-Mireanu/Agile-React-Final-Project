import React from 'react';

export default function Navbar(){
    return (
        <ul className="nav justify-content-center bg-light">
            <li className="nav-item">
                <a className="nav-link h5 " href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link h5" href="#">Wishlist</a>
            </li>
            <li className="nav-item">
                <a className="nav-link h5" href="#">Contact</a>
            </li>
        </ul>
    )
}