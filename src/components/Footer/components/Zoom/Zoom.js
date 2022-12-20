import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import * as Icon from 'react-bootstrap-icons';

const Zoom = () => {

    return (
        <>
            <label className="d-block">Zoom</label>
            <ButtonGroup size="sm" className="mb-2">
                <Button variant="secondary"><Icon.ZoomOut color="white" size={20} /></Button>
                <Button variant="light">Reset</Button>
                <Button variant="secondary"><Icon.ZoomIn color="white" size={20} /></Button>
            </ButtonGroup>
        </>

    )
}

export default Zoom;
