import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <Navbar sticky="top" bg="light" variant="light">
        <Container>
            
            <Navbar.Brand>
                <Nav.Link as={ Link } to="/">
            <img //inlinestyling. Don't do too much here
            style= {{ height: "30px", margin: "0", padding: "0"}}
            src= {require('../../assets/images/PS5logo.png').default}
        alt="PS5"/>
        </Nav.Link>
        
        </Navbar.Brand>
            <Nav>
                <Nav.Link as={ Link } to="/">Home</Nav.Link>
                <Nav.Link as={ Link } to="/Games">Games</Nav.Link>
                <Nav.Link as={ Link } to="/Characters">Characters</Nav.Link>
                <Nav.Link as={ Link } to="/adminlanding">Admin Panel</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default MainNavigation;