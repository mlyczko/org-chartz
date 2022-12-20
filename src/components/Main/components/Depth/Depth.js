import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Icon from 'react-bootstrap-icons';
import './Depth.scss';

const Zoom = () => {

    return (
        <>
            <div className="d-inline-flex flex-column text-start">
                <label>Depth</label>
                <ButtonGroup vertical size="sm" className="mb-2">
                    <Button variant="secondary"><Icon.ArrowUpCircle color="white" size={20} /></Button>
                    <Form.Control
                        type="number"
                        id="depth-value"
                        className="text-center form-control-sm p-1"
                    />
                    <Button variant="secondary"><Icon.ArrowDownCircle color="white" size={20} /></Button>
                </ButtonGroup>
            </div>

        </>

    )
}

export default Zoom;
