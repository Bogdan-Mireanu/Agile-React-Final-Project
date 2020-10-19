import React, {useContext} from 'react';
import Navbar from '../Navbar/Navbar';
import {WishContext}from '../../context/WishContext';


export default function WishList(){
    const {wishList} = useContext(WishContext);
    console.log(wishList);
    
    return (
            <>
                <Navbar/>
                {wishList.map(wish => (
                    <>
                        <img className='mb-2' src={wish.volumeInfo.imageLinks ? wish.volumeInfo.imageLinks.thumbnail : null} alt="cover" />
                        <h1>{wish.id}</h1>
                        <h2>{wish.volumeInfo.title}</h2>
                    </>
                ))}
                

                
                <div className="card-footer fixed-bottom h6 mb-0">
                        2020 © AgiHub Team 
                </div> 
           </>
    )
    
}
