import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ArchiveItemLayout = ({ data }) => {
  return (
    <a href={data.url}>
      <Container>
        <Row >
          <Col xs="auto">
            <i className="fa-solid fa-file-excel" style={{ fontSize: '1.5em' }}></i>
          </Col>
          <Col xs={11}>
            <div>{data?.title}</div>
          </Col>
        </Row>
      </Container >
    </a>
  )
}

export default ArchiveItemLayout