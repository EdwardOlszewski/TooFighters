import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Image } from 'react-bootstrap'
import { listTourDates } from '../actions/tourActions'
import Events from '../components/Events'
import About from '../components/About'
import MusicList from '../components/MusicList'
import bandPic from '../images/band.jpg'

const HomeScreen = () => {
  // Assign useDispatch hook
  const dispatch = useDispatch()

  const tourDateList = useSelector((state) => state.tourDateList)
  const { dates, loading, error } = tourDateList

  // useEffect hook
  useEffect(() => {
    dispatch(listTourDates())
  }, [dispatch])

  return (
    <Container style={{ margin: 'auto', textAlign: 'center' }}>
      <Image src={bandPic}></Image>
      <About />
      <Events dates={dates} />
      <MusicList />
    </Container>
  )
}

export default HomeScreen
