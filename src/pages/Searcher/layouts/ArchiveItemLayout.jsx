import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import getIconType from '../helpers/getIconType'

const ArchiveItemLayout = ({ data }) => {

  // const type = VerifyFileType(data?.url || '')

  return (
    <Container className='d-flex flex-row gap-3'>
      <i className={getIconType(data.type)} style={{ fontSize: '1.5em' }}></i>
      <div>{data?.title}</div>
    </Container >
  )
}

export default ArchiveItemLayout