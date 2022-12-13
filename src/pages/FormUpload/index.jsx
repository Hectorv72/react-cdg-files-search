import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useFecthToken from '../../hooks/useFecthToken'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import FormContext from './contexts/FormContext'
import deletePropierty from './helpers/deletePropierty'
import findIconUrl from './helpers/findIconUrl'
import removeError from './helpers/removeError'
import { validateSchema } from './schemas/FormSchema'
import './styles/index.css'

const initMessage = { text: '', type: '', show: false }
const initForm = { type: 'default' }

const FormUpload = () => {
  const { file } = useParams()
  const fetchToken = useFecthToken()
  const navigate = useNavigate()

  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState(initMessage)
  const [options, setOptions] = useState([])

  const handleSetFormTags = tags => setForm(form => ({ ...form, tags }))
  const handleDeleteErrors = prop => setErrors(errors => removeError(errors, prop))

  const handleSetFormProperty = (value, prop) => {
    setForm(form => value ? { ...form, [prop]: value } : deletePropierty({ ...form }, prop))
    handleDeleteErrors(prop)
  }

  // cambia los valores del formulario
  const handleSetFormChange = ({ target }) => {
    const { name, value } = target
    handleSetFormProperty(value, name)
  }

  // obtiene los datos del archivo a modificar
  const handleGetFile = async () => {
    const { ok, data } = await fetchToken.get(`/file/${file}`)
    ok
      ? setForm(data.file)
      : navigate('/')
  }

  // obtiene las opciones del select groups
  const handleGetOptions = async () => {
    try {
      const { ok, data } = await fetchToken.get('/group')
      ok && setOptions(data.groups)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSendForm = async () => {
    try {
      const { ok, data } = await fetchToken.post('/file', form)
      setMessage({ text: data.message, type: ok ? 'success' : 'danger', show: true })
      if (ok) {
        setForm(initForm)
        handleGetOptions()
      }
    } catch (error) {
      console.log(error)
    }
  }

  // verifica la validez del schema de datos
  const handleValidateSchema = async () => {
    setMessage(initMessage)
    setErrors({})
    const { isValid, errors } = await validateSchema(form)
    isValid
      ? handleSendForm()
      : setErrors(errors)
  }

  useEffect(() => {
    const icon = findIconUrl(form.url)
    icon && handleSetFormProperty(icon, 'type')
  }, [form.url])

  useEffect(() => {
    file && handleGetFile()
    handleGetOptions()
  }, [])

  const context = { form, errors, message, options, handleSetFormChange, handleSetFormTags, handleSetFormProperty }

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
              {
                file &&
                <Button variant='outline-danger' size='lg' onClick={handleSendForm} >
                  <i className="fa-solid fa-trash me-2"></i>
                  Eliminar
                </Button>
              }
              <Button variant='outline-primary' size='lg' onClick={handleValidateSchema} >
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