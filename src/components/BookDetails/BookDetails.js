import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import {useParams} from 'react-router-dom';
import Note from '../Note/Note';

export default function BookDetails(prop) {
    const [modal, showModal] = React.useState(false);
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
    return (
        <>
            {data.volumeInfo && (
            <div className = ''>
                <h2> {data.volumeInfo.title}</h2>
                <h5 className='text-muted'>Publisher: {data.volumeInfo.publisher}</h5>
                <h5 className='text-muted'>Publish Date: {data.volumeInfo.publishedDate}</h5>
                <h5 className='text-muted'>Description: {data.volumeInfo.description}</h5>
                    <img className="" src={data.volumeInfo.imageLinks ? data.volumeInfo.imageLinks.thumbnail : null} alt="cover" />
                <Button onClick={()=>showModal(!modal)}>Add note</Button>
                {
                modal && 
                <CustomModal toggleModal={showModal} show={modal}>
                <Note></Note>
                </CustomModal>
                }
            </div>
            )}
        </>
    )

}