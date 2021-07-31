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
    <Navbar
      bg='dark'
      variant='dark'
      expand='lg'
      fixed='top'
      style={{ borderColor: '#0a0a0a' }}
    >
      <Container>
        <Navbar.Brand href='#home'>
          <Image src={logo}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <a href='/' className='navLinks'>
              <h6 className='navText'>Home</h6>
            </a>
            <a href='/#about' className='navLinks'>
              <h6 className='navText'>About</h6>
            </a>
            <a href='/#events' className='navLinks'>
              <h6 className='navText'>Events</h6>
            </a>
            <a href='/#videos' className='navLinks'>
              <h6 className='navText'>Videos</h6>
            </a>
            <a href='/#songs' className='navLinks'>
              <h6 className='navText'>Songs</h6>
            </a>
            {userInfo && (
              <NavDropdown
                title={
                  <span
                    className='navText'
                    style={{
                      color: 'yellow',
                      fontSize: '120%',
                    }}
                  >
                    <i className='fas fa fa-cogs'></i> Admin Settings
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
              <a href='https://www.youtube.com/user/toofighters'>
                <h6 className='nav-icon'>
                  <i className='fab fa-youtube-square'></i>
                </h6>
              </a>

              <a href='https://www.facebook.com/chicagostribute'>
                <h6 className='nav-icon'>
                  <i className='fab fa-facebook-square'></i>
                </h6>
              </a>

              <a href='https://www.instagram.com/toofighterschicago/'>
                <h6 className='nav-icon'>
                  <i className='fab fa-instagram-square'></i>
                </h6>
              </a>

              <a href='mailto:joe995511@gmail.com'>
                <h6 className='nav-icon'>
                  <i className='fas fa-envelope-square'></i>
                </h6>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
