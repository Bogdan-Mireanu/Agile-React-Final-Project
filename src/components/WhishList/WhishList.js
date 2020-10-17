import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import WhishContext from '../../context/WhishContext';


export default function WhishList(){
    const [whishlist, setWishlist] =useState([]);
    return (
    <WhishContext.Provider>
        <Navbar/>
        <p>List</p>
        <div className="card-footer fixed-bottom h6 mb-0">
                2020 © AgiHub Team 
        </div> 
    </WhishContext.Provider>
    )
    
}
