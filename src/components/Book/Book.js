import React, {useState} from 'react';

import BookDetails from '../BookDetails/BookDetails';
import { Modal, Button } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
export default function Book({books}){
    const[modal, showModal] =React.useState(false);
    console.log('modal>> ', modal);
    let id;
    return (
        <div className='col m-1 shadow-sm'>
            <img onClick={()=>showModal(!modal)} className="" src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
            <h4 className=''>{books.volumeInfo.title}</h4>            
            <h5 className=' text-muted'>{books.volumeInfo.authors}</h5>
            <h3>{modal}</h3>
            {modal && <CustomModal toggleModal = {showModal} show={modal}> <BookDetails id={books.id}></BookDetails>
                </CustomModal>}
            
        </div>
    )
}