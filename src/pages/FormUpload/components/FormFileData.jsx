import React, { useState } from 'react'
// import { } from 'validator'
import { Card, Container, Row, Col } from 'react-bootstrap'
import TagsInput from './TagsInput'

const FormFileData = () => {
  const [validations, setValidations] = useState({
    filename: false,
    url: false
  })

  const options = [
    'construccion',
    'salud',
    'economia'
  ]

  const handleValidateUrl = (e) => {
    const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(exp);
    const { value } = e.target
    const validation = regex.test(value)
    setValidations({ ...validations, url: validation })
  }

  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body >
        <Card.Title className='text-center'>Información del archivo</Card.Title>
        <Container >
          <Row className='gy-2'>
            <Col xs={6}>
              <label htmlFor="filename" className="form-label">Nombre del archivo</label>
              <input id='filename' className='form-control' type="text" />
            </Col>
            <Col xs={6}>
              <label htmlFor="select-group" className="form-label">Grupo de carpeta</label>
              <select id="select-group" className='form-select'>
                {
                  options.map(
                    (element, index) => <option key={'test-option-' + index} value={element}>{element}</option>
                  )
                }
              </select>
            </Col>
            <Col xs={12}>
              <label htmlFor="url" className="form-label">Url</label>
              <input style={{ color: validations.url ? 'green' : 'red' }} onChange={handleValidateUrl} id='url' className='form-control' type="text" />
            </Col>
            <Col xs={12}>
              <label htmlFor="tags" className="form-label">Etiquetas</label>
              <TagsInput />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default FormFileData