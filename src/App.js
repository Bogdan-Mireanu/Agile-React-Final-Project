import React from 'react';
import Header from './components/Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navbar">
          Navbar...
        </div>
        
        <Header/>
        
        <div className="searchbar">
          SearchBar..
        </div>
        <div className="books-container">
        BooksList... 
        </div>
      </div>
  );
}

export default App;
