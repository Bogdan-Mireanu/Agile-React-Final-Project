import React from 'react';
import {Link} from 'react-router-dom';


export default function Book({books}){

    return (
        <div className='card-container'>
            <img className='card-imgage' src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
            <h5 className='card-title'>{books.volumeInfo.title.substring(0, 38)}</h5>            
            <h6 className=' card-subtitle mb-2 text-dark'>{books.volumeInfo.authors ? books.volumeInfo.authors.slice(0, 1) : []}</h6>
            <p className="btn details"><Link to={`/bookDetails/${books.id}`}>Get more details</Link></p>
        </div>
    )
}