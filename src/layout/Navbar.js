import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import logo from '../asset/img/logo.jpg'
//NavBar
export default function NavBarExample() {
  return (
    <>
      <Navbar className='navBg' bg="primary" variant="dark" expand="sm">
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>
            <img src={logo} alt='logo' width='50' hight='50'/>           
            OpenData API
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>搜尋</Nav.Link>
              <Nav.Link as={Link} to='About'>操作說明</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section>
        <Outlet />
      </section>

    </>
  )
}