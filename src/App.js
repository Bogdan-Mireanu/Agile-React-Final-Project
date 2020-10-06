import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="navbar">
          Navbar...
        </div>
        
        <Header/>
        <SearchBar/>
        <div className="books-container">
        BooksList... 
        </div>
      </div>
  );
}

export default App;
