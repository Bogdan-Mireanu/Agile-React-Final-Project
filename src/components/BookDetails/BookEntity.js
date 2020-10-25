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
                <div className='adauga css'>
                    <div className="">
                        <h2> {data.volumeInfo.title}</h2>
                    <div className=''>
                        <h5 className=''>Publisher: {data.volumeInfo.publisher}</h5>
                        <h5 className='t'>Publish Date: {data.volumeInfo.publishedDate}</h5>
                        <h5 className=''>Description: {data.volumeInfo.description}</h5>
                    </div>
                <Button onClick={getNote}>Get Note</Button>
                {note}
                </div>
                </div>)
            }
        </>
    )}
