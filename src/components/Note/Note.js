import React from 'react';
import { useContext } from 'react';
import { Button,  Form } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AuthContext} from '../Login/AuthContext';

export default function Note(prop) {
    const { values, bindInput } = useForm(null);
    const { user } = useContext(AuthContext);
    let { id } = useParams() || prop;
    const db = firebase.firestore();
    
    async function addNote(e) {
        e.preventDefault();
        var wishlistRef = db.collection('notes').doc(user.email);

        var setWithMerge = wishlistRef.set({
            [id]: values.note
        }, { merge: true }).then(console.log("Document successfully written!"));
    }
    return (
        <div>  
            <Form onSubmit={addNote}>
                <p>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Introduce your note</Form.Label>
                        <Form.Control as="textarea" rows={4} column={10} type="note" {...bindInput('note')}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </p>
            </Form>
        </div>
     
    )

}