import Form from 'react-bootstrap/Form';
import './Switch.scss';

const Switch = () => (
    <Form className="ms-3 d-flex align-items-center">
        <Form.Switch
            type="switch"
            id="edit-mode"
            label=""
            className="float-end form-switch-md mb-0"
        />
    </Form>
)

export default Switch;
