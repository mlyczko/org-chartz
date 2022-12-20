import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="mb-5">
            <Container>
                <div className="py-3 mb-3">
                    <Row className="align-items-center">
                        <Col xs={2} className="text-start">
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
                        </Col>
                        <Col xs={10} className="d-flex justify-content-end">
                            <Form className="d-flex position-relative">
                                <Button className="position-absolute top-0 start-0 bottom-0" variant="btn-outline-dark"><Icon.Search className="me-3" color="black" size={20} /></Button>
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    className="ps-5"
                                />
                            </Form>
                            <Form className="ms-3 d-flex align-items-center">
                                <Form.Switch
                                    type="switch"
                                    id="custom-switch"
                                    label=""
                                    className="float-end form-switch-md mb-0"
                                />
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )

}

export default Header;
