import React, {useState} from 'react';
import axios from 'axios';
import Book from '../Book/Book';


export default function SearchBar(){
    const [term, setTerm] = useState('');
    const [books, setBooks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const searchBook = async () => {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyDGsjWlMM4w2y0sFURdaxjU4fXtUvB5qMk&maxResults=10`)
            setBooks(data.items);
        };
        searchBook();
        console.table(books);
    }


    return (
        <>
            <div className=''>
                    <form>
                        <input type='text' value={term} autoFocus onChange={(e) => setTerm(e.target.value)}/>
                        <button type='submit' onClick={handleSubmit}>Search</button>
                    </form>
            </div>
            <React.Fragment>
                   {!books.length ? "Enter a search term and press submit button!" : books.map(item => <Book books={item} key={item.id}/>)} 
            </React.Fragment>
           
        </>
    )
}