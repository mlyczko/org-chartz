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
                <h4 className="mb-4">{props.name}</h4>
                <p>Position: {props.position}</p>
                <p>Note 1: {props.note1}</p>
                <p>Note 2: {props.note2}</p>
            </Modal.Body>
        </Modal>
    );
}

export default UserDetails;
