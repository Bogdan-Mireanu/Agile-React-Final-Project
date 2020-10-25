import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import * as firebase from 'firebase';
import useForm from '../../hooks/useForm';
import { Redirect, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function Login(){
    const { values, bindInput } = useForm(null);
    const { pathname } = useLocation();
    const isRegister = (pathname === '/register');
    const { isAuthenticated } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (!isRegister) {
                console.log('registered')
                await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
            } else {
                if (values && values.password === values.retype_password) {
                    await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
                } else {
                    //setMessage('The two passwords must match!');
                }
            }
        } catch (e) {
            //setMessage(e.message);
        }
    }

    if (isAuthenticated) {
        return <Redirect to='/search' />
    }
     
    return (
        
        <form onSubmit={handleSubmit} className="form-container">
            Do not have an account? <Link to ='/register'>Click here to register</Link>
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
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" className="form-control text-center" type="email" {...bindInput('email')}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input id="password" className="form-control text-center" type="password" {...bindInput('password')}/>
                    </div>
                    {isRegister && (
                        <div className="form-group">
                            <label htmlFor="retype_password">Retype Password</label>
                            <input type="password" className="form-control text-center" id="retype_password" {...bindInput('retype_password')} />
                        </div>
                    )}
                </div>
            </div>

           
            <div className="d-flex justify-content-between mx-auto col-md-8">

                    {/** 
                    <Link to='/search'>*/}
                      
                    {/**</p></Link> */}

                <p><button type="submit" className="btn btn-block btn-primary">{!isRegister ? 'Login' : 'Register'}</button></p>
            </div>
        </form>
    )
}