import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import FormContext from './contexts/FormContext'
// import FormTags from './components/FormTags'
import './styles/index.css'

const FormUpload = () => {
  return (
    <FormContext.Provider>
      <div className='vertical-center' style={{ backgroundColor: '#F6F9FF' }}>
        <Container>
          <Row className='gy-3' >
            <Col xs={9}>
              <FormFileData />
            </Col>
            <Col xs={3}>
              <FormIconSelect />
            </Col>
            <Col xs={12} className="d-flex flex-row justify-content-evenly justify-content-center">
              <Button variant='outline-secondary' size='lg' >Salir</Button>
              <Button variant='outline-primary' size='lg' >Guardar</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </FormContext.Provider>
    // <div class="shadow p-3 mb-5 bg-body rounded">Regular shadow</div>
  )
}

export default FormUpload