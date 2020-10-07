import React, {useState} from 'react';

import { Modal, Button } from 'react-bootstrap';
export default function CustomModal(prop){

    const [show, setShow] = useState(prop.show);
    const handleClose = () => {
        setShow(false); 
        prop.toggleModal();
    };
    const handleShow = () => setShow(true);
    
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Dialog>
            <Modal.Body>
               {prop.children}
            </Modal.Body>
        </Modal.Dialog>
        </Modal>
    )
}