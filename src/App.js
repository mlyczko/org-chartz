import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <header>
        <div className="container">
          <div className="py-3 mb-3">
            <div className="row">
              <div className="col text-start">
                <Button variant="primary" onClick={handleShow}>
                  Menu
                </Button>
                <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3 navbar-nav">
                      <span>Name Surname</span>
                      <span>yourname@sii.pl</span>
                      <hr />
                      <Nav.Link href="#">My charts</Nav.Link>
                      <Nav.Link href="#">Shared with me</Nav.Link>
                      <Nav.Link href="#">Stared</Nav.Link>
                      <Nav.Link href="#">Recent</Nav.Link>
                      <Nav.Link href="#">Offline</Nav.Link>
                      <Nav.Link href="#">Uploads</Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
              <div className="col">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <div className="col">
                <Form>
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
        <div className="container">
          <div className="row mb-3">
            <div className="col"></div>
            <div className="col">
              <div className="text-bg-secondary">
                <div>Grzegorz Nitro</div>
                <div>CEO</div>
              </div>
            </div>
            <div className="col"></div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="text-bg-secondary">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="text-bg-secondary">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="text-bg-secondary">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <div className="text-bg-secondary">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="text-bg-secondary">
                <div>Jan Kowalski</div>
                <div>Account Executive</div>
              </div>
            </div>
            <div className="col">
              <div className="text-bg-secondary">
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
