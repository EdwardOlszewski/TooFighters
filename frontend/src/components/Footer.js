// Dependencies
import React from 'react'
// Components
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer style={{ marginTop: '10rem' }}>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            <span style={{ color: 'gray' }}>
              Copyright 2021 &copy; Too Fighters
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
