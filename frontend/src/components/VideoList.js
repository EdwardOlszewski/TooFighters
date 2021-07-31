import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import videoData from '../data/videoData.json'

const VideoList = () => {
  return (
    <Container>
      <h2 style={{ marginTop: '8rem' }}>Videos</h2>

      <Row>
        {videoData.videos.map((video) => (
          <Col key={video.ID} xs={12} lg={4}>
            <iframe
              width='100%'
              height='350'
              src={`https://www.youtube.com/embed/${video.ID}`}
              title={video.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default VideoList
