import React, {useState} from 'react';

import BookDetails from '../BookDetails/BookDetails';
import { Modal, Button } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
export default function Book({books}){
    const[modal, showModal] =React.useState(false);
    console.log('modal>> ', modal);
    let id;
    return (
        <div className=''>
            <h2>{books.volumeInfo.title}</h2>
            <img onClick={()=>showModal(!modal)} className="" src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
            <h3>{books.volumeInfo.authors}</h3>
            <h3>{modal}</h3>
            {modal && <CustomModal toggleModal = {showModal} show={modal}> <BookDetails id={books.id}></BookDetails>
                </CustomModal>}
        </div>
    )
}