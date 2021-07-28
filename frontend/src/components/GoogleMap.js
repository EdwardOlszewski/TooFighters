import React from 'react'
import { Card } from 'react-bootstrap'

const GoogleMap = ({ address }) => {
  const eventAddress =
    'https://www.google.com/maps/embed/v1/place?key=' +
    'AIzaSyDGXDZGm5ReipAelpD795gNptYZUVkGSw8' +
    '&q=' +
    address

  return (
    <Card className='mapCard'>
      <iframe
        className='embedMap'
        title={address}
        src={eventAddress}
        allowFullScreen
      ></iframe>
    </Card>
  )
}
export default GoogleMap
