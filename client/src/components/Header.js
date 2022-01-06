import React from 'react'
import '../App.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    const mystyle = {
        textDecoration: "none",
        color: "white",
        paddingLeft: "25px",
        paddingRight: "25px",
    }
    return (
        <div className='makesticky'>
            <Navbar bg="dark" variant='dark' expand="lg" >
                <Container>
                    <Navbar.Brand >Web App 2.0</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto ">
                            <Link to='/' style={mystyle}>Home</Link>
                            <Link to='/patientlist' style={mystyle}>Patient's List</Link>
                            <Link to='/doctorlist' style={mystyle}>Doctor's List</Link>
                            <Link to='/historybyid' style={mystyle}>Get Patient's history by id</Link>
                            <Link to='/casebyid' style={mystyle}>Get total case of a patient by id</Link>
                            <Link to='/createuser' style={mystyle}>Create User</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
