import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import DateFormat from '../components/DateFormat'
import { Link } from 'react-router-dom'

const Events = ({ date }) => {
  const curDate = new Date().getTime()

  const dateCheck = (num) => {
    const newDate = new Date(num)
    return newDate
  }

  return (
    <Row>
      {dateCheck(date.date) > curDate ? (
        <React.Fragment>
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
            <h5>
              {date.fee < 0.99 ? (
                <p>FREE</p>
              ) : (
                '$' + parseFloat(date.fee).toFixed(2)
              )}
            </h5>
          </Col>
          <Col md={1}>
            <Link to={`/event/${date._id}`}>
              <Button variant='danger'>View</Button>
            </Link>
          </Col>
          <div className='line' />
        </React.Fragment>
      ) : null}
    </Row>
  )
}

export default Events

/*

{dates.map((date) => (
        <>
          {dateCheck(date.date) > curDate ? (
            <Row key={date._id} style={{ marginTop: '1rem' }}>
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
                <h5>
                  {date.fee === 0 ? (
                    <p>FREE</p>
                  ) : (
                    '$' + parseFloat(date.fee).toFixed(2)
                  )}
                </h5>
              </Col>
              <Col md={1}>
                <Link to={`/event/${date._id}`}>
                  <Button variant='danger'>View</Button>
                </Link>
              </Col>
              <div className='line' />
            </Row>
          ) : null}
        </>
      ))}






*/
