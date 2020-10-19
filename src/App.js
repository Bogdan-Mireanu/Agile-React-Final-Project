import React from 'react';
import Login from './components/Login/Login';
import SearchBar from './components/SearchBar/SearchBar';
import WishList from './components/WishList/WishList';
import WishListProvider from './context/WishContext';
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
    <WishListProvider>

    <Router>
    <div className="App">
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/search">  <SearchBar /></Route>
          <Route exact path="/bookDetails/:id"> <BookDetails /></Route>
          <Route exact path='/whishlist'><WishList/></Route>
          <Route>{() => <h1>404</h1>}</Route>
        </Switch>
    </div>
    </Router>
    </WishListProvider>
  );
}

export default App;
