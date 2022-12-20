import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OffcanvasMenu from './components/OffcanvasMenu';
import Search from './components/Search';
import Switch from './components/Switch';

const Header = () => {

    return (
        <header className="my-3">
            <Container>
                <Row className="align-items-center mb-1">
                    <Col xs={2} className="text-start">
                        <OffcanvasMenu />
                    </Col>
                    <Col xs={10} className="d-flex justify-content-end">
                        <Search />
                        <Switch />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header;
