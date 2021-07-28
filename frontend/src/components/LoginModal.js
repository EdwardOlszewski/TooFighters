import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal, Button, Container, Form, InputGroup } from 'react-bootstrap'
import { login } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const LoginModal = ({ location, history }) => {
  // Assign useDispatch hook
  const dispatch = useDispatch()

  // Get the redirect from the URL
  const redirect = location.search ? location.search.split('=')[1] : '/'

  // Pull data from the redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // Create stateful values and functions
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [passVis, setPassVis] = useState('password')
  const [bgColor, setBgColor] = useState('#e8f0fe')

  //Function to show password
  const showPassHandler = (e) => {
    e.preventDefault()
    if (passVis === 'password') {
      setPassVis('text')
    } else {
      setPassVis('password')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setMessage('Must fill out entire form.')
    } else {
      dispatch(login(email, password))
    }
  }

  // useEffect hook
  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  return (
    <Modal.Dialog>
      <Container style={{ margin: 'auto', textAlign: 'center' }}>
        <Modal.Header variant='dark'>
          <Modal.Title>Admin Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={submitHandler} style={{ padding: '1rem' }}>
            <Form.Group controlId='email'>
              <h6 className='form-label'> Email Address</h6>
              <Form.Control
                required
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <br />
            <h6 className='form-label'> Password</h6>
            <InputGroup>
              <Form.Control
                required
                type={passVis}
                placeholder='Enter password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></Form.Control>
              <InputGroup.Append>
                <InputGroup.Text
                  className='pass-vis'
                  style={{ backgroundColor: bgColor }}
                >
                  <i
                    onClick={showPassHandler}
                    className={
                      passVis === 'password' ? 'fas fa-eye-slash' : 'fas fa-eye'
                    }
                  ></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>

            <br />
            {loading ? (
              <Loader />
            ) : (
              <Modal.Footer>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                <Button type='submit' variant='primary' className='btn' block>
                  Log In
                </Button>
              </Modal.Footer>
            )}
          </Form>
        </Modal.Body>
      </Container>
    </Modal.Dialog>
  )
}

export default LoginModal
