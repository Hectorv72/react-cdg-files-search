import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Alert, Collapse } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import FormContext from './contexts/FormContext'
import deletePropierty from './helpers/deletePropierty'
import findIconUrl from './helpers/findIconUrl'
import removeError from './helpers/removeError'
import sendFileForm from './helpers/sendFileForm'
import { validateSchema } from './schemas/FormSchema'
import './styles/index.css'

const FormUpload = () => {
  const initMessage = { text: '', type: '', show: false }
  const initForm = { type: 'default' }
  const params = useParams()
  console.log(params)
  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState(initMessage)

  const handleSetFormTags = tags => setForm(form => ({ ...form, tags }))
  const handleDeleteErrors = prop => setErrors(errors => removeError(errors, prop))

  const handleSetFormProperty = (value, prop) => {
    setForm(form => value ? { ...form, [prop]: value } : deletePropierty({ ...form }, prop))
    handleDeleteErrors(prop)
  }

  const handleSetFormChange = ({ target }) => {
    const { name, value } = target
    handleSetFormProperty(value, name)
  }

  const handleSendForm = async () => {
    setMessage(initMessage)
    setErrors({})
    const { isValid, errors } = await validateSchema(form)

    if (isValid) {
      const { ok, message } = await sendFileForm(form)
      setMessage({ text: message, type: ok ? 'success' : 'danger', show: true })
      ok && setForm(initForm)
    } else {
      setErrors(errors)
    }
  }

  useEffect(() => {
    const icon = findIconUrl(form.url)
    icon && handleSetFormProperty(icon, 'type')
  }, [form.url])

  const context = { form, errors, message, handleSetFormChange, handleSetFormTags, handleSetFormProperty }

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
            <Col xs={12}>
              <Collapse in={message.show}>
                {
                  <div className={`alert alert-${message.type} p-1 m-0 text-center`}>{message.text}</div>
                }
              </Collapse>
            </Col>
            <Col xs={12} className="d-flex flex-row justify-content-evenly justify-content-center">
              <Link className='btn btn-lg btn-outline-secondary' to={'/'}>
                <i className="fa-solid fa-chevron-left me-2"></i>
                Salir
              </Link>
              <Button variant='outline-primary' size='lg' onClick={handleSendForm} >
                <i className="fa-solid fa-floppy-disk me-2"></i>
                Guardar
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </FormContext.Provider>
  )
}

export default FormUpload