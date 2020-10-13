import React from 'react';

export default function Login(){
    return (
        <form className="form-container">
            <div className="header">
                <i className="fas fa-book-reader fa-5x"></i>
                <h1>Google Books API</h1>
            </div>
            <div className="books-image">
                    <img className="mb-20" src={require("../../images/books.jpg")} alt="books"></img>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-md-offset-3 text-center">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input id="username" className="form-control text-center" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="form-control text-center" type="text"/>
                    </div>
                </div>
            </div>

           
            <div className="d-flex justify-content-between mx-auto col-md-8">

                    <p><button type="submit" className="btn btn-block btn-primary">Login</button></p>
                    <p><button type="submit" name="save" className="btn btn-block btn-success">Register</button></p>
            
            </div>
        </form>
    )
}