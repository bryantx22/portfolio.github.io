import './index.css'

import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Navigation () {
    return (
        <div>
            <Navbar>
            <Container>
                <Nav className="head">
                    <NavLink to="/" className="button-48" activeClassname="active">
                        <span class="text"> Home </span>
                    </NavLink>
                    <NavLink to="/research" className="button-48" activeClassname="active">
                        <span class="text"> Research </span>
                    </NavLink>
                    <NavLink to="/blog" className="button-48" activeClassname="active">
                        <span class="text"> Blog </span>
                    </NavLink>
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
}

export default Navigation;