import React, { useState } from 'react'
// import { } from 'validator'
import { Card, Container, Row, Col } from 'react-bootstrap'

const FormFileData = () => {
  const [validations, setValidations] = useState({
    filename: false,
    url: false
  })

  const handleValidateUrl = (e) => {
    const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(exp);
    const { value } = e.target
    const validation = regex.test(value)
    setValidations({ ...validations, url: validation })
  }

  return (
    <Card className='shadow border-0'>
      <Card.Body>
        <Card.Title>Información</Card.Title>
        <Container>
          <Row className='gy-2'>
            <Col xs={12}>
              <label htmlFor="filename" className="form-label">Nombre del archivo</label>
              <input id='filename' className='form-control' type="text" />
            </Col>
            <Col xs={12}>
              <label htmlFor="url" className="form-label">Url</label>
              <input style={{ color: validations.url ? 'green' : 'red' }} onChange={handleValidateUrl} id='url' className='form-control' type="text" />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default FormFileData