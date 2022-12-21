import Modal from 'react-bootstrap/Modal';

const UserDetails = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    User details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <h4>Grzegorz Nitro</h4>
                <p>Position: CEO</p>
                <p>Field 2: xxx</p>
                <p>Field 3: yyy</p>
            </Modal.Body>
        </Modal>
    );
}

export default UserDetails;
