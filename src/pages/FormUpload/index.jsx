import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import FormContext from './contexts/FormContext'
import deletePropierty from './helpers/deletePropierty'
import setFormChange from './helpers/setFormChange'
import './styles/index.css'

const FormUpload = () => {
  const [form, setForm] = useState({})
  const [errors, setErrors] = useState({})

  const handleSetFormChange = event => setForm(form => setFormChange(event, form))
  const handleSetFormTags = tags => setForm(form => ({ ...form, tags }))

  const handleSetFormProperty = (value, prop) => {
    setForm(form => {
      return value ? { ...form, [prop]: value } : deletePropierty({ ...form }, prop)
    })
  }

  const context = { form, errors, handleSetFormChange, handleSetFormTags, handleSetFormProperty }

  return (
    <FormContext.Provider value={context}>
      <div className='vertical-center' style={{ backgroundColor: '#F6F9FF' }}>
        <Container>
          <Row className='gy-3' >
            <Col xs={12} xl={9}>
              <FormFileData />
            </Col>
            <Col xs={12} xl={3}>
              <FormIconSelect />
            </Col>
            <Col xs={12} className="d-flex flex-row justify-content-evenly justify-content-center">
              <Button variant='outline-secondary' size='lg' >Salir</Button>
              <Button variant='outline-primary' size='lg' onClick={() => console.log(form)} >Guardar</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </FormContext.Provider>
  )
}

export default FormUpload