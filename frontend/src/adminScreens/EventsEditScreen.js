import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Meta from '../components/Meta'
import { Form, Button, Card, Col, Row, InputGroup } from 'react-bootstrap'
import { listTourDateDetails, updateTourDate } from '../actions/tourActions'
import { TOUR_DATE_UPDATE_RESET } from '../constants/tourConstants'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

const EventsEditScreen = ({ match, history }) => {
  // Assign useDispatch hook
  const dispatch = useDispatch()

  // Get the product ID from the url
  const tourDateId = match.params.id

  // Create stateful values and functions
  const [tourDate, setTourDate] = useState('2021-01-01')
  const [time, setTime] = useState('time')
  const [address, setAddress] = useState('address')
  const [city, setCity] = useState('city')
  const [state, setState] = useState('state')
  const [venue, setVenue] = useState('venue')
  const [venueWebsite, setVenueWebsite] = useState('venue website')
  const [fee, setFee] = useState(1)
  const [isActive, setIsActive] = useState(false)

  // Pull data from the redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading: userLoading, error: userError } = userLogin

  const tourDateDetails = useSelector((state) => state.tourDateDetails)
  const {
    date,
    loading: detailsLoading,
    success: detailsSuccess,
    error: detailsError,
  } = tourDateDetails

  const tourDateUpdate = useSelector((state) => state.tourDateUpdate)
  const {
    loading: updateLoading,
    success: updateSuccess,
    error: updateError,
  } = tourDateUpdate

  // Function called on form submit
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateTourDate({
        _id: tourDateId,
        date: tourDate,
        address,
        time,
        city,
        state,
        venue,
        venueWebsite,
        fee,
        isActive,
      })
    )
  }

  // useEffect hook
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/admin')
    } else if (!date.date || date._id !== tourDateId) {
      dispatch(listTourDateDetails(tourDateId))
    } else if (detailsSuccess === true) {
      setTourDate(date.date)
      setTime(date.time)
      setAddress(date.address)
      setCity(date.city)
      setState(date.state)
      setVenueWebsite(date.venueWebsite)
      setVenue(date.venue)
      setFee(date.fee)
      setIsActive(date.isActive)
    }
    if (updateSuccess) {
      dispatch({
        type: TOUR_DATE_UPDATE_RESET,
      })
      history.push('/admin/eventsList')
    }
  }, [
    dispatch,
    history,
    tourDateId,
    date,
    userInfo,
    updateSuccess,
    detailsSuccess,
  ])

  return (
    <FormContainer>
      <Meta title='Event Edit Screen' />
      <Card className='form-card'>
        <h2 style={{ textAlign: 'center' }}>Edit Event</h2>
        {detailsLoading || userLoading || updateLoading ? (
          <Loader />
        ) : detailsError || userError || updateError ? (
          <Message variant='danger'>{userError}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Row className='mb-3'>
              <Form.Group id='date' as={Col}>
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type='date'
                  placeholder='Enter Date'
                  value={tourDate}
                  onChange={(e) => setTourDate(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group id='time' as={Col}>
                <Form.Label>Time</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row className='mb-3'>
              <Form.Group id='city' as={Col}>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='address'
                  placeholder='Enter address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group id='city' as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  type='city'
                  placeholder='Enter City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group id='state' as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  type='state'
                  placeholder='Enter State'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </Row>
            <Row className='mb-3'>
              <Form.Group id='venue'>
                <Form.Label>Venue URL</Form.Label>
                <Form.Control
                  type='venueURL'
                  placeholder='Enter Venue URL'
                  value={venueWebsite}
                  onChange={(e) => setVenueWebsite(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group id='venue' as={Col} style={{ marginTop: '1rem' }}>
                <Form.Label>Venue</Form.Label>
                <Form.Control
                  type='venue'
                  placeholder='Enter Venue'
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <InputGroup
                id='fee'
                as={Col}
                style={{ height: '1px', marginTop: '3rem' }}
              >
                <InputGroup.Text
                  style={{ backgroundColor: 'white', color: 'black' }}
                >
                  <span>$</span>
                </InputGroup.Text>
                <Form.Control
                  style={{ marginLeft: '-1rem' }}
                  type='number'
                  placeholder='Enter Price'
                  value={fee}
                  onChange={(e) => setFee(e.target.value)}
                ></Form.Control>
              </InputGroup>
            </Row>

            <Form.Group id='isactive' className='mb-3'>
              <Form.Check
                type='checkbox'
                label='Publish'
                checked={isActive}
                onChange={(e) => setIsActive(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type='submit' variant='danger' size='md'>
              Update
            </Button>
          </Form>
        )}
      </Card>
    </FormContainer>
  )
}

export default EventsEditScreen
