import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import CustomModal from '../Modal/CustomModal';
import {useParams} from 'react-router-dom';


export default function Note(prop) {
    
    return (
        <div>  
            <Form>
                <p>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Introduce your note</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </p>
            </Form>
        </div>
     
    )

}