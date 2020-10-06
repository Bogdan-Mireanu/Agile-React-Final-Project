import React, {useState} from 'react';
import axios from 'axios';
import Book from '../Book/Book';


export default function SearchBar(){
    const [term, setTerm] = useState('');
    const [books, setBooks] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        const searchBook = async () => {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=KEY&maxResults=10`)
            setBooks(data);
        };
        searchBook();
    }


    return (
        <>
            <div className=''>
                    <form>
                        <input type='text' value={term} autoFocus onChange={(e) => setTerm(e.target.value)}/>
                        <button type='submit' onClick={handleSubmit}>Search</button>
                    </form>
            </div>
            {/*<div className="">
                {books.map(item => (books.indexOf(item) >= 1) && <Book/>)}
    </div>*/}
        </>
    )
}