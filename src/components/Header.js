import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from '../reducers/DataProvider';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function Header() {
    const { cart } = useContext(DataContext);
    const [navExpanded, setNavExpanded] = useState(false)

    const LinkCustom = (props) => {
        return <Link to={props.path} className={props.className} onClick={() => setNavExpanded(false)}>{props.children}</Link>
    }
    return (
        <Navbar bg="info" expand="lg" onToggle={() => setNavExpanded(!navExpanded)}
                expanded={navExpanded}>
            <LinkCustom path="/" children="Smart Store" className="navbar-brand" />
            <LinkCustom path="/cart-checkout" className="navbar-brand"><span><i className='fa fa-cart-plus' />{cart.length}</span></LinkCustom>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkCustom path="/dien-thoai-pt-dienthoai" children="Điện thoại" className="nav-link" />
                    <LinkCustom path="/dong-ho-pt-dongho" children="Đồng hồ" className="nav-link" />
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item eventKey="/action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;