import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';
import './OffcanvasMenu.scss';

const OffcanvasMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="btn-outline-dark" className="p-0" onClick={handleShow}>
                <Icon.List color="black" size={40} />
            </Button>
            <Offcanvas className="bg-secondary text-white" show={show} onHide={handleClose}>
                <Offcanvas.Header className="justify-content-end" closeVariant="white" closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 navbar-nav">
                        <span>Name Surname</span>
                        <span>yourname@sii.pl</span>
                        <hr />
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.FolderFill className="me-3" color="white" size={20} /> My charts</Nav.Link>
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.PersonFillLock className="me-3" color="white" size={20} /> Shared with me</Nav.Link>
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.Star className="me-3" color="white" size={20} /> Stared</Nav.Link>
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.Clock className="me-3" color="white" size={20} /> Recent</Nav.Link>
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.WifiOff className="me-3" color="white" size={20} /> Offline</Nav.Link>
                        <Nav.Link className="d-flex align-items-center" href="#"><Icon.Upload className="me-3" color="white" size={20} /> Uploads</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default OffcanvasMenu;
