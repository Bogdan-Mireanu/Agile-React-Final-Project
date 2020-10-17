import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button} from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import {useParams} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Note from '../Note/Note';

export default function BookDetails(prop) {
    const [modal, showModal] = useState(false);
    const [data, setData] = useState({});
    let { id } = useParams();

    useEffect(() => {
        async function getDetails(){
        const result = await axios.get(
            `https://www.googleapis.com/books/v1/volumes/`+id,
        );
        setData(result.data);
    }
    getDetails();
    }, [id]);

    function addToWishList(){
        console.log('added');
    }
    return (
        <>  
            <Navbar/>
            {data.volumeInfo && (
            <div className = 'card flex-row card-bookDetails p-2'>
                <div className="book-title">
                    <h2> {data.volumeInfo.title}</h2>
                    <img className='mb-2' src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null} alt="cover" />
                    <Button onClick={()=>showModal(!modal)}>Add note</Button>
                    <Button variant='success' onClick={addToWishList}>Add to whishlist</Button>
                {
                modal && 
                <CustomModal toggleModal={showModal} show={modal}>
                <Note></Note>
                </CustomModal>
                }
                </div>

                <div className='book-body'>
                    <h5 className=''>Publisher: {data.volumeInfo.publisher}</h5>
                    <h5 className='t'>Publish Date: {data.volumeInfo.publishedDate}</h5>
                    <h5 className=''>Description: {data.volumeInfo.description}</h5>
                </div>

            </div>
            )}
        </>
    )

}