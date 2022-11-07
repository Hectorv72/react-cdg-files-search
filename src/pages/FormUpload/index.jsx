import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormFileData from './components/FormFileData'
import FormGroup from './components/FormGroup'
import FormIconSelect from './components/FormIconSelect'
import './styles/index.css'

const FormUpload = () => {
  return (
    <div className='vertical-center' style={{ backgroundColor: '#F6F9FF' }}>
      <Container>
        <Row className='gy-3'>
          <Col xs={9}>
            <Row className='gy-3'>
              <Col xs={12}>
                <FormFileData />
              </Col>
              <Col xs={12}>
                <FormGroup />
              </Col>
            </Row>
          </Col>
          <Col xs={3}>
            <FormIconSelect />
          </Col>
          <Col xs={12} className="text-center">
            <Button variant='outline-primary' size='lg' >Guardar</Button>
          </Col>
        </Row>

      </Container>
    </div>
    // <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
  )
}

export default FormUpload