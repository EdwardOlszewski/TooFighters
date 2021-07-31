import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Events = () => {
  return (
    <Container>
      <h2 style={{ marginTop: '6rem' }}>About</h2>
      <Row style={{ marginTop: '1rem' }}>
        <Col>
          <h5>
            The original Foo Fighters Tribute band from the Chicagoland area
            founded in 2012.
          </h5>
        </Col>
      </Row>
    </Container>
  )
}

export default Events
