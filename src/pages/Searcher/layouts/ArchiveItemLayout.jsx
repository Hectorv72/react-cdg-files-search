import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import getIconType from '../../../helpers/getIconType'
import openLink from '../helpers/openLink'

const ArchiveItemLayout = ({ data }) => {
  const { type, filename, url } = data
  return (
    <Container className='d-flex flex-row gap-3'>
      <i className={getIconType(type)} style={{ fontSize: '1.5em' }}></i>
      <div onClick={() => openLink(url)}>{filename || ''}</div>
    </Container >
  )
}

export default ArchiveItemLayout