import React from 'react';


export default function Book({books}){
    return (
        <div className=''>
            <h2>{books.volumeInfo.title}</h2>
            <img className="" src={books.volumeInfo.imageLinks ? books.volumeInfo.imageLinks.thumbnail : null} alt="cover"/>
            <h3>{books.volumeInfo.authors}</h3>
        </div>
    )
}