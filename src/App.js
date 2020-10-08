import React from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="navbar">
          Navbar...
        </div>
        <Header/>
        <SearchBar/>
    </div>
  );
}

export default App;
