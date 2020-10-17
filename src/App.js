import React from 'react';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import WhishList from './components/WhishList/WhishList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookDetails from './components/BookDetails/BookDetails';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
    
    <div className="App">
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/search">  <SearchBar /></Route>
          <Route exact path="/bookDetails/:id"> <BookDetails /></Route>
          <Route exact path='/whishlist'><WhishList/></Route>
          <Route>{() => <h1>404</h1>}</Route>
        </Switch>
     
      
    </div>
    </Router>
  );
}

export default App;
