import React from 'react';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookDetails from './components/BookDetails/BookDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    
    <div className="App">
        <Switch>
          <Route exact path="/login"><Login/></Route>
          <Route exact path="/bookDetails/:id"> <BookDetails /></Route>
          <Route exact path="/search">  <SearchBar /></Route>
        </Switch>
     
      
    </div>
    </Router>
  );
}

export default App;
