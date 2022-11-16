import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import FormContext from './contexts/FormContext'
import deletePropierty from './helpers/deletePropierty'
import findIconUrl from './helpers/findIconUrl'
import setFormChange from './helpers/setFormChange'
import { validateSchema } from './schemas/FormSchema'
import './styles/index.css'

const FormUpload = () => {
  const params = useParams()
  console.log(params)
  const [form, setForm] = useState({ icon: 'default' })
  const [errors, setErrors] = useState({})

  const handleSetFormChange = event => setForm(form => setFormChange(event, form))
  const handleSetFormTags = tags => setForm(form => ({ ...form, tags }))

  const handleSetFormProperty = (value, prop) => {
    setForm(form => {
      return value ? { ...form, [prop]: value } : deletePropierty({ ...form }, prop)
    })
  }

  const handleSendForm = async () => {
    const { isValid } = await validateSchema(form)
    console.log(isValid)
    console.log(form)
  }

  useEffect(() => {
    const icon = findIconUrl(form.url)
    icon && handleSetFormProperty(icon, 'icon')
  }, [form.url])

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
              <Link className='btn btn-lg btn-outline-secondary' to={'/'}>
                Salir
              </Link>
              <Button variant='outline-primary' size='lg' onClick={handleSendForm} >Guardar</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </FormContext.Provider>
  )
}

export default FormUpload