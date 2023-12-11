import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function NavigationBar() {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Classroom</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to="/home">Home</NavLink>
                    <NavLink className="nav-link" to="/products">Products</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
}


export default NavigationBar;