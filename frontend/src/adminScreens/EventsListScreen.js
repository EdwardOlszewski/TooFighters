import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import {
  createTourDate,
  listTourDates,
  deleteTourDate,
} from '../actions/tourActions'
import { TOUR_DATE_CREATE_RESET } from '../constants/tourConstants'
import { Table, Button, Card, Container } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Meta from '../components/Meta'
import DateFormat from '../components/DateFormat'

const EventsListScreen = ({ history }) => {
  // Assign useDispatch hook
  const dispatch = useDispatch()

  // Pull data from the redux store
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo, loading: userLoading, error: userError } = userLogin

  const tourDateCreate = useSelector((state) => state.tourDateCreate)
  const {
    loading: createLoading,
    error: createError,
    success: createSuccess,
    createdDate,
  } = tourDateCreate

  const tourDateDelete = useSelector((state) => state.tourDateDelete)
  const {
    loading: deleteLoading,
    error: deleteError,
    success: deleteSuccess,
  } = tourDateDelete

  const tourDateList = useSelector((state) => state.tourDateList)
  const { dates, loading: listLoading, error: listError } = tourDateList

  // Function called when delete button clicked
  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteTourDate(id))
    }
  }

  // Function called when create button clicked
  const createTourDateHandler = () => {
    dispatch(createTourDate())
  }

  // useEffect hook
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push('/admin')
    } else if (createSuccess) {
      history.push(`/admin/event/${createdDate._id}/edit`)
      dispatch({ type: TOUR_DATE_CREATE_RESET })
    } else {
      dispatch(listTourDates())
    }
  }, [dispatch, history, userInfo, createSuccess, createdDate, deleteSuccess])

  return (
    <Container style={{ marginTop: '8rem' }}>
      <Card className='card-content'>
        <Meta title='Event List Screen' />
        <h1>Events</h1>
        {userLoading || createLoading || listLoading || deleteLoading ? (
          <Loader />
        ) : userError || createError || listError || deleteError ? (
          <Message variant='danger'>{userError}</Message>
        ) : (
          <Table
            variant='dark'
            striped
            bordered
            hover
            responsive
            className='table-sm'
          >
            <thead>
              <tr>
                <th>EVENT</th>
                <th>LOCATION</th>
                <th>DATE</th>
                <th>PRICE</th>
                <th>PUBLISHED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dates.map((date) => (
                <tr key={date._id} style={{ color: 'black' }}>
                  <td>{date.venue}</td>
                  <td>{date.city}</td>
                  <td>{DateFormat(date.date)}</td>
                  <td>${date.fee}</td>
                  <td>
                    {date.isActive ? (
                      <i
                        className='fas fa-check'
                        style={{ color: 'green' }}
                      ></i>
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/admin/event/${date._id}/edit`}>
                      <Button variant='success' className='btn-sm'>
                        <i className='fas fa-edit'></i>
                      </Button>
                    </LinkContainer>
                    <span> </span>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(date._id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        <Button variant='success' onClick={createTourDateHandler}>
          <i className='fas fa-plus'></i> Create Event
        </Button>
      </Card>
    </Container>
  )
}

export default EventsListScreen
