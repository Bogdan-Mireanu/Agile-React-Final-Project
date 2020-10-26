import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Note from '../Note/Note';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthContext, AuthContextProvider } from '../Login/AuthContext';
export default function BookDetails(prop) {
    const [modal, showModal] = useState(false);
    const [data, setData] = useState({});
    let { id } = useParams() || prop;
    const { user } = useContext(AuthContext);
    const db = firebase.firestore();
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        console.log(user);
        async function getDetails(){
        const result = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/`+id,
        );
        setData(result.data);
    }
    getDetails();
    }, [id]);

    async function addToWishList(title){
        
        const snapshot = await firebase.firestore().collection('wishlist').get();
        var wishlistRef = db.collection('wishlist').doc(user.email);

        var setWithMerge = wishlistRef.set({
            [id]: title
        }, { merge: true }).then(console.log("Document successfully written!"));
        var mywishlist = db.collection("wishlist").doc();
        console.log(mywishlist);
        if (user) {
            /**
            db.collection("wishlist").doc(user.email).set({
                bookID: id,
            })
                .then(function () {
                    console.log("Document successfully written!");
                })
                .catch(function (error) {
                    console.error("Error writing document: ", error);
                });
           */
           
        }     
        console.log('added');
    }
    return (
        <>  
            <Navbar/>
            {data.volumeInfo && (
            <div className = "container-bookdetails">
                <div className="book-title">
                    <h5> {data.volumeInfo.title.substring(0, 38)}</h5>
                    <img className='mb-2' src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null} alt="cover" />
                    <Button onClick={()=>showModal(!modal)}>Add note</Button>
                    <Button variant='success' onClick={() => addToWishList(data.volumeInfo.title)}>Add to whishlist</Button>
                    {
                    modal && 
                    <CustomModal toggleModal={showModal} show={modal}>
                    <Note></Note>
                    </CustomModal>
                    }
                </div>
                <div className='book-body'>
                    <h5 className='body-authors'>Authors: {data.volumeInfo.authors ? data.volumeInfo.authors.slice(0, 1) : []}</h5>
                    <h5 className='body-publisher'>Publisher: {data.volumeInfo.publisher}</h5>
                    <h5 className='body-date'>Publish Date: {data.volumeInfo.publishedDate}</h5>
                    <h5 className='body-description'>Description: {data.volumeInfo.description}</h5>
                </div>
            </div>
            )}
        </>
    )

}