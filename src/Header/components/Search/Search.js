import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as Icon from 'react-bootstrap-icons';

const Search = () => (
    <Form className="d-flex position-relative">
        <Button className="position-absolute top-0 start-0 bottom-0" variant="btn-outline-dark"><Icon.Search className="me-3" color="black" size={20} /></Button>
        <Form.Control
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="ps-5"
        />
    </Form>
)

export default Search;
