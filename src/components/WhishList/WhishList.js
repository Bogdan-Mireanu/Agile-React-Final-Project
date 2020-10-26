import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import WhishContext from '../../context/WhishContext';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import BookEntity from '../BookDetails/BookEntity';
import { AuthContext, AuthContextProvider } from '../Login/AuthContext';

export default function WhishList(){
    const db = firebase.firestore();
    const [wishlist, setWishlist] =useState();
    
    const { user }= useContext(AuthContext);
 
    useEffect(() => {
       if(user){
           console.log("User >> ", user);
           async function getData() {
               const snapshot = await firebase.firestore().collection('wishlist').get();
               return snapshot.docs.filter(doc => doc.id === user.email).map(doc => doc.data());

        };
        getData().then(c => setWishlist(c));
    }
    }, [db,user]);
    console.log(wishlist);
    return (
       
    <WhishContext.Provider>
        <Navbar/>
            
            {wishlist && wishlist.length > 0 && Object.keys(wishlist[0]).map((item, index) => {
                return <div key={index}>
                    <BookEntity id={item}> </BookEntity></div>;
            })}
       
        <div className="card-footer fixed-bottom h6 mb-0">
                2020 © AgiHub Team 
        </div> 
        
    </WhishContext.Provider>
 
    )
    
}