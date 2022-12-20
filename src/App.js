import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <header className="mb-5">
        <div className="container">
          <div className="py-3 mb-3">
            <div className="row align-items-center">
              <div className="col text-start">
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
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.FolderFill className="me-1" color="white" size={20} /> My charts</Nav.Link>
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.PersonFillLock className="me-1" color="white" size={20} /> Shared with me</Nav.Link>
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.Star className="me-1" color="white" size={20} /> Stared</Nav.Link>
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.Clock className="me-1" color="white" size={20} /> Recent</Nav.Link>
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.WifiOff className="me-1" color="white" size={20} /> Offline</Nav.Link>
                      <Nav.Link className="d-flex align-items-center" href="#"><Icon.Upload className="me-1" color="white" size={20} /> Uploads</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="col d-flex justify-content-end">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Form className="ms-3 d-flex align-items-center">
                  <Form.Switch
                    type="switch"
                    id="custom-switch"
                    label=""
                    className="float-end"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container text-center">
          <div className="row mb-4">
            <div className="col"></div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Grzegorz Nitro</div>
                <div>CEO</div>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="bg-secondary bg-gradient text-white p-3">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
