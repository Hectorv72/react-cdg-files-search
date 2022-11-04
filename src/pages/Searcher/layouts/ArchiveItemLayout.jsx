import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import getIconType from '../helpers/getIconType'
import VerifyFileType from '../helpers/VerifyFileType'

const ArchiveItemLayout = ({ data }) => {

  // const type = VerifyFileType(data?.url || '')

  return (
    <a className='link-dark' href={data.url} style={{ textDecoration: 'none' }}>
      <Container>
        <Row >
          <Col xs="auto">
            <i className={getIconType(data.type)} style={{ fontSize: '1.5em' }}></i>
          </Col>
          <Col xs={9}>
            <div>{data?.title}</div>
          </Col>
        </Row>
      </Container >
    </a>
  )
}

export default ArchiveItemLayout