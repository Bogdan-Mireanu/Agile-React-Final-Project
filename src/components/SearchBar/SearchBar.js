import React, {useState} from 'react';
import axios from 'axios';
import Book from '../Book/Book';
import Navbar from '../Navbar/Navbar';


export default function SearchBar(){
    const [term, setTerm] = useState('');
    const [books, setBooks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        const searchBook = async () => {
            const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyDGsjWlMM4w2y0sFURdaxjU4fXtUvB5qMk&maxResults=12`)
            setBooks(data.items);
        };
        searchBook();
        console.table(books);
    }


    return (
        <>
        <Navbar/>
        <div  className='container'>
            <div className="header">
                <i className="fas fa-book-reader fa-5x"></i>
                <h1>Google Books API</h1>
            </div>
            <div className="row justify-content-md-center">
                <form className='input-group mb-3 col-sm  text-center'> 
                    <input type='text' className='form-control' placeholder='Enter a search term' value={term} autoFocus onChange={(e) => setTerm(e.target.value)}/>
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary search-books' type='submit' onClick={handleSubmit}>Search</button>
                    </div>
                </form> 
            </div>
            
            <div  className='books-container'>
                <React.Fragment>
                    {!books.length ? "" : books.map(item => <Book books={item} key={item.id}/>)} 
                </React.Fragment>
            </div>
        </div>  
        <div className="card-footer fixed-bottom h6 mb-0">
            2020 © AgiHub Team 
        </div>  
        </>
    )
}