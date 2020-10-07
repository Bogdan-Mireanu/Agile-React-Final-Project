import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CustomModal from '../Modal/CustomModal';

export default function BookDetails(prop) {
   
    const [data, setData] = useState({});
    const id = prop.id;
    
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
                <h4>Title: {data.volumeInfo.title}</h4>
                <h4>Publisher: {data.volumeInfo.publisher}</h4>
                <h4>Publish Date: {data.volumeInfo.publishedDate}</h4>
                <h4>Description: {data.volumeInfo.description}</h4>
            </div>
            )}
        </>
    )

}