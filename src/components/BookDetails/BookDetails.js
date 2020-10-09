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
                <h2> {data.volumeInfo.title}</h2>
                <h5 className='text-muted'>Publisher: {data.volumeInfo.publisher}</h5>
                <h5 className='text-muted'>Publish Date: {data.volumeInfo.publishedDate}</h5>
                {data.volumeInfo.description}
            </div>
            )}
        </>
    )

}