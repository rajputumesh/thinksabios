import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Logo from '../images/tslogo-dark.png'
const Header = () => {
    return (
        <>
            <Navbar style={{background:"black"}}>
                <Container>
                    <NavLink to="/">
                        <img src={Logo} alt='logo' style={{width:'45%'}}/>
                    </NavLink>
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to="/"> 
                            <button className='px-5 btn btn-danger' size="sm" style={{borderRadius: '25px'}}>DONATE</button>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
