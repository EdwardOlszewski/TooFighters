import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import DateFormat from '../components/DateFormat'
import { Link } from 'react-router-dom'

const Events = ({ dates }) => {
  const curDate = new Date().getTime()

  const dateCheck = (num) => {
    const newDate = new Date(num)
    return newDate
  }

  return (
    <Container>
      <h2 style={{ marginTop: '8rem' }}>Upcoming Events</h2>

      {dates.map((date) => (
        <>
          {dateCheck(date.date) > curDate ? (
            <Row key={date._id} style={{ marginTop: '2rem' }}>
              <Col md={3}>
                <h5>{date.venue}</h5>
              </Col>
              <Col md={3}>
                <h5>{date.city + ' ' + date.state}</h5>
              </Col>
              <Col md={3}>
                <h5>{DateFormat(date.date)}</h5>
              </Col>
              <Col md={2}>
                <h5>${parseFloat(date.fee).toFixed(2)}</h5>
              </Col>
              <Col md={1}>
                <Link to={`/event/${date._id}`}>
                  <Button variant='danger'>View</Button>
                </Link>
              </Col>
            </Row>
          ) : null}
        </>
      ))}
    </Container>
  )
}

export default Events
