import React from 'react';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Note from '../Note/Note';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthContext, AuthContextProvider } from '../Login/AuthContext';
export default function BookEntity(prop) {

    const [data, setData] = useState();
    const [note, setNote] = useState();
    const { user } = useContext(AuthContext);
    let { id } =  prop;

    async function getNote() {
        console.log('Get notes');
        const snapshot = await firebase.firestore().collection('notes').get();
        const docs = snapshot.docs.filter(doc => doc.id === user.email).map(doc => doc.data());
        let bookNote = 'No note to display';
        if (docs.length > 0 && docs[0][id]) {
            bookNote = docs[0][id];
        }
        setNote(bookNote);
    };
  
    useEffect(() => {

        async function getDetails() {
            const result = await axios.get(
                `https://www.googleapis.com/books/v1/volumes/` + id,
            );
            setData(result.data);
        }
        getDetails();
    }, [id]);

    return (
        <>
          
            {data && (
                <div className="wish-container">
                    <div className="wish-details">
                        <h3> {data.volumeInfo.title}</h3>
                        <p className=''>Publisher: {data.volumeInfo.publisher}</p>
                        <p className='t'>Publish Date: {data.volumeInfo.publishedDate}</p>
                    </div>
                    <div className="wish-note">
                        <div className="note-btn">
                           <p><button className="btn btn-note" onClick={getNote}>Display my Note</button></p> 
                        </div>
                        <div className="note">
                           {note}
                        </div>
                     
                    </div>
                </div>)
            }
        </>
    )}
