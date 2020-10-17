import React, {useState} from 'react';
import {
    Switch, Route, Redirect, Link
} from 'react-router-dom';

import BookDetails from '../BookDetails/BookDetails';
import { Button } from 'react-bootstrap';

export default function Book({books}){

    let id;
    return (
        <div className='card text-center text-dark mb-2 ml-2 flex-grow-1 p-2 card-book'>
            <img className='card-img-top' src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
          
            <h5 className='card-title'>{books.volumeInfo.title}</h5>            
            <h6 className=' card-subtitle mb-2 text-dark'>{books.volumeInfo.authors}</h6>
            <p className="btn details"><Link to={`/bookDetails/${books.id}`}>Get more details</Link></p>
        </div>
    )
}