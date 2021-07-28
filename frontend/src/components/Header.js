import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Image, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import logo from '../images/TFLogo.png'

const Header = () => {
  // Assign useDispatch hook to dispatch action
  const dispatch = useDispatch()

  // Pull data from the redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <Container>
      <Navbar bg='dark' variant='dark' expand='lg' style={{ border: 'none' }}>
        <Navbar.Brand href='#home'>
          <Image src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#link'>Home</Nav.Link>
            <Nav.Link href='#link'>Events</Nav.Link>
            {userInfo && (
              <NavDropdown
                title={
                  <span className='nav-links'>
                    <i className='fas fa fa-cogs'></i> Admin
                  </span>
                }
                id='adminmenu'
              >
                <LinkContainer to='/admin/eventsList'>
                  <NavDropdown.Item>Events</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav className='ms-auto'>
            <div className='nav-socials'>
              <a href='https://www.youtube.com/channel/UCzeV03hagrR7mtE30TqpQ8g?app=desktop&fbclid=IwAR0IM2Eb7dusBTrzWbndeXnxAjvwP3m70uiFx6zTteOQ9Csd7-CpEtY8JTk'>
                <h6 className='nav-icon'>
                  <i className='fab fa-youtube-square'></i>
                </h6>
              </a>

              <a href='https://www.facebook.com/SportsandSneakers21'>
                <h6 className='nav-icon'>
                  <i className='fab fa-facebook-square'></i>
                </h6>
              </a>

              <a href='https://www.instagram.com/sportsandsneakers2021'>
                <h6 className='nav-icon'>
                  <i className='fab fa-instagram-square'></i>
                </h6>
              </a>

              <a href='mailto:sportsandsneakers2021@gmail.com'>
                <h6 className='nav-icon'>
                  <i className='fas fa-envelope-square'></i>
                </h6>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}

export default Header
