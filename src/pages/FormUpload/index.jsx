import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import useFecthToken from '../../hooks/useFecthToken'
import FormFileData from './components/FormFileData'
import FormIconSelect from './components/FormIconSelect'
import ModalDelete from './components/ModalDelete'
import FormContext from './contexts/FormContext'
import deletePropierty from './helpers/deletePropierty'
import findIconUrl from './helpers/findIconUrl'
import removeError from './helpers/removeError'
import { validateSchema } from './schemas/FormSchema'
import './styles/index.css'
import parseErrors from './helpers/parseErrors'
import Loading from './components/Loading'

const initMessage = { text: '', type: '', show: false }
const initForm = { type: 'default' }

const FormUpload = () => {
  const { file } = useParams()
  const fetchToken = useFecthToken()
  const navigate = useNavigate()

  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(initMessage)
  const [options, setOptions] = useState([])
  const [disabled, setDisabled] = useState(false)
  const [prevFile, setPrevFile] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const handleSetFormTags = tags => setForm(form => ({ ...form, tags }))
  const handleDeleteErrors = prop => setErrors(errors => removeError(errors, prop))
  const handleHideModal = () => setShowModal(false)

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
    try {
      const { ok, data } = await fetchToken.get(`/file/${file}`)
      const { file: fileData } = data
      const group = fileData.group ? { value: fileData.group, label: fileData.group } : null
      setPrevFile(JSON.parse(JSON.stringify({ ...fileData, group })))
      ok
        ? setForm({ ...fileData, group })
        : navigate('/')
    } catch (error) {
      console.log(error)
      navigate('/')
    }
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
      setLoading(true)
      const { ok, data } = file
        ? await fetchToken.put('/file', form)
        : await fetchToken.post('/file', form)
      setLoading(false)
      setMessage({ text: data.message, type: ok ? 'success' : 'danger', show: true })
      if (ok) {
        file && setPrevFile({ ...form })
        file && setDisabled(true)
        !file && setForm(initForm)
        handleGetOptions()
      } else {
        data?.errors && setErrors(parseErrors(data.errors))
      }
    } catch (error) {
      setDisabled(true)
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

  useEffect(() => {
    if (file) {
      if (JSON.stringify(form) !== JSON.stringify(prevFile)) {
        setDisabled(false)
      } else {
        setDisabled(true)
      }
    }
  }, [form])


  const context = { form, errors, message, options, showModal, prevFile, handleSetFormChange, handleSetFormTags, handleSetFormProperty, handleHideModal }

  return (
    (file ? prevFile : true)
      ?
      <FormContext.Provider value={context}>
        {
          prevFile && <ModalDelete />
        }
        <div className='mt-5'>
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
                <Button variant='outline-secondary' size='lg' onClick={() => navigate('/')} >
                  <i className="fa-solid fa-chevron-left me-2"></i>
                  Volver
                </Button>
                {
                  file &&
                  <Button variant='outline-danger' size='lg' onClick={() => setShowModal(true)} >
                    <i className="fa-solid fa-trash me-2"></i>
                    Eliminar
                  </Button>
                }
                <Button variant='outline-primary' size='lg' disabled={disabled || loading} onClick={handleValidateSchema} >
                  <i className="fa-solid fa-floppy-disk me-2"></i>
                  {
                    loading
                      ? 'Guardando...'
                      : 'Guardar'
                  }
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </FormContext.Provider>
      :
      <Loading />
  )
}

export default FormUpload