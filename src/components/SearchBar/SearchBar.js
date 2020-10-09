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
        <div  className='container'>
            <div className="row justify-content-md-center">
                <form className='input-group mb-3 col-sm  text-center'> 
                    <input type='text' className='form-control' placeholder='Enter a search term' value={term} autoFocus onChange={(e) => setTerm(e.target.value)}/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='submit' onClick={handleSubmit}>Search</button>
                    </div>
                </form> 
            </div>
            
            <div  className='row justify-content-center row-cols-6'>
                <React.Fragment>
                    {!books.length ? "" : books.map(item => <Book books={item} key={item.id}/>)} 
                </React.Fragment>
            </div>
        </div>    
        </>
    )
}