import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import songData from '../data/songData.json'

const MusicList = () => {
  // Create stateful values and functions
  const [songID, setSongID] = useState('18712030')

  return (
    <Container>
      <h2 style={{ marginTop: '8rem' }}>Songs</h2>

      <iframe
        title={songID}
        className='musicIframe'
        width='100%'
        height='100%'
        scrolling='no'
        frameBorder='no'
        src={`https://www.reverbnation.com/widget_code/html_widget/artist_3107758?widget_id=55&pwc[song_ids]=${songID}&context_type=song&pwc[size]=small`}
      ></iframe>

      {songData.songs.map((song) => (
        <Row key={song.ID} className='musicRow'>
          <Col onClick={(e) => setSongID(song.ID)}>
            <Button className='musicButton'>
              <h5 className='musicTitle'>{song.title}</h5>
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default MusicList
