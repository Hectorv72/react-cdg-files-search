import React from 'react'
import { Card, Container } from 'react-bootstrap'

const options = [
  'construccion',
  'salud',
  'economia'
]

const FormGroup = () => {
  return (
    <Card className='shadow border-0'>
      <Card.Body>
        <Card.Title>Grupo</Card.Title>
        <Container>
          <label htmlFor="select-group" className="form-label">Grupo de carpeta perteneciente</label>
          <select id="select-group" className='form-select'>
            {
              options.map(
                (element, index) => <option key={'test-option-' + index} value={element}>{element}</option>
              )
            }
          </select>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default FormGroup