import React, {useState} from 'react';
import {
    Switch, Route, Redirect, Link
} from 'react-router-dom';

import BookDetails from '../BookDetails/BookDetails';
import { Button } from 'react-bootstrap';

export default function Book({books}){

    let id;
    return (
        <div className='col m-1 shadow-sm'>
            <img className="" src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
          
            <h4 className=''>{books.volumeInfo.title}</h4>            
            <h5 className=' text-muted'>{books.volumeInfo.authors}</h5>
            <Link to={`/bookDetails/${books.id}`}>Details</Link>
            
        </div>
    )
}