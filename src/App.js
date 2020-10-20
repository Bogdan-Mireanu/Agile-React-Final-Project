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

import * as firebase from 'firebase';
import { AuthContextProvider } from './components/Login/AuthContext';

var firebaseConfig = {
  apiKey: "AIzaSyCWTjr6m6QQY2dIthQjZeHsWmkhHa3hQFM",
  authDomain: "bookapi-4ac73.firebaseapp.com",
  databaseURL: "https://bookapi-4ac73.firebaseio.com",
  projectId: "bookapi-4ac73",
  storageBucket: "bookapi-4ac73.appspot.com",
  messagingSenderId: "425974546691",
  appId: "1:425974546691:web:5e962e062e5ba6e949a936",
  measurementId: "G-0N9Z02KRZZ"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
function App() {
  return (
    <AuthContextProvider>
    <Router>
    
    <div className="App">
        <Switch>
          <Route exact path="/"><Login/></Route>
          <Route exact path="/search">  <SearchBar /></Route>
          <Route exact path="/bookDetails/:id"> <BookDetails /></Route>
          <Route exact path="/wishlist"> <WhishList/></Route>
          <Route exact path="/register"><Login/></Route>
          <Route>{() => <h1>404</h1>}</Route>
        </Switch>     
    </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;
