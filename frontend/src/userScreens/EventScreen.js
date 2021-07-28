import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTourDateDetails } from '../actions/tourActions'
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import GoogleMap from '../components/GoogleMap'
import DateFormat from '../components/DateFormat'

const EventScreen = ({ match }) => {
  // Assign useDispatch hook to dispatch actions
  const dispatch = useDispatch()

  // Go to the state and pull out information from eventDetails
  const tourDateDetails = useSelector((state) => state.tourDateDetails)
  const { loading, error, success, date } = tourDateDetails

  // useEffect hook to do something after render
  useEffect(() => {
    dispatch(listTourDateDetails(match.params.id))
  }, [dispatch, match])

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          <Col xs={12} lg={6} style={{ marginTop: '3rem' }}>
            <GoogleMap
              address={
                date.venue +
                ' ' +
                date.address +
                '' +
                date.city +
                '' +
                date.state
              }
            />
          </Col>
          <Col xs={12} lg={6}>
            <Card className='eventCard'>
              <Card.Body>
                <ListGroup variant='flush'>
                  <ListGroup.Item className='eventSection'>
                    <h2 className='eventVenue'>{date.venue}</h2>
                  </ListGroup.Item>
                  <ListGroup.Item className='eventSection'>
                    <h5 className='eventTitle'>Address: </h5>
                    <p className='eventDetail'>
                      {date.address + ' ' + date.city + ', ' + date.state}{' '}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='eventSection'>
                    <h5 className='eventTitle'>Time: </h5>
                    <p className='eventDetail'>{date.time} </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='eventSection'>
                    <h5 className='eventTitle'>Date: </h5>
                    <p className='eventDetail'>{DateFormat(date.date)} </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='eventSection'>
                    <h5 className='eventTitle'>Price: </h5>
                    <p className='eventDetail'>
                      ${(Math.round(date.fee * 100) / 100).toFixed(2)}{' '}
                    </p>
                  </ListGroup.Item>
                  <ListGroup.Item className='eventSection'>
                    <a href={date.venueWebsite}>
                      <Button className='eventButton' type='button'>
                        View Venue Website
                      </Button>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  )
}

export default EventScreen
