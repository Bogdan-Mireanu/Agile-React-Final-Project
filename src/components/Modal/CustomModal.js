import React, {useState} from 'react';

import { Modal} from 'react-bootstrap';
export default function CustomModal(prop){

    const [show, setShow] = useState(prop.show);
    const handleClose = () => {
        setShow(false); 
        prop.toggleModal();
    };
    
    
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