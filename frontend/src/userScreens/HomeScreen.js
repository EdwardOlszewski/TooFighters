import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Image } from 'react-bootstrap'
import { listTourDates } from '../actions/tourActions'
import Events from '../components/Events'
import About from '../components/About'
import MusicList from '../components/MusicList'
import VideoList from '../components/VideoList'
import bandPic from '../images/band.jpg'
import Meta from '../components/Meta'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = () => {
  // Assign useDispatch hook
  const dispatch = useDispatch()

  const tourDateList = useSelector((state) => state.tourDateList)
  const { dates, loading, error, success } = tourDateList

  // useEffect hook
  useEffect(() => {
    dispatch(listTourDates())
  }, [dispatch])

  return (
    <Container
      style={{ margin: 'auto', textAlign: 'center', marginTop: '7rem' }}
    >
      <Meta title='Home' />
      <Image className='bandImage' src={bandPic}></Image>

      <div id='about'></div>
      <About />

      <div id='events'></div>

      <h2 style={{ marginTop: '8rem' }}>Upcoming Events</h2>
      <div className='line' />

      {loading ? (
        <Loader />
      ) : error || !success ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <React.Fragment>
          {dates.map((date) => (
            <Events key={date._id} date={date} />
          ))}
        </React.Fragment>
      )}

      <div id='videos'></div>
      <VideoList />

      <div id='songs'></div>
      <MusicList />
    </Container>
  )
}

export default HomeScreen
