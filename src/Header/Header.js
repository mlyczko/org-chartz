import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OffcanvasMenu from './components/OffcanvasMenu/OffcanvasMenu';
import Search from './components/Search/Search';
import Switch from './components/Switch/Switch';

const Header = () => {

    return (
        <header className="mb-5">
            <Container>
                <div className="py-3 mb-3">
                    <Row className="align-items-center">
                        <Col xs={2} className="text-start">
                            <OffcanvasMenu />
                        </Col>
                        <Col xs={10} className="d-flex justify-content-end">
                            <Search />
                            <Switch />
                        </Col>
                    </Row>
                </div>
            </Container>
        </header>
    )
}

export default Header;
