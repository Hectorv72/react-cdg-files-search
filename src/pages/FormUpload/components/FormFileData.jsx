import React, { useContext, useState } from 'react'
import Creatable from 'react-select/creatable'
import { Card, Container, Row, Col, Collapse } from 'react-bootstrap'
import FormContext from '../contexts/FormContext'
import TagsInput from './TagsInput'

const options = [
  { value: 'sad231', label: 'construccion' },
  { value: 'zxc23', label: 'salud' },
  { value: '3334fgds', label: 'economia' },
]

const FormFileData = () => {
  const { form, errors, handleSetFormChange, handleSetFormProperty } = useContext(FormContext)
  // const [validations, setValidations] = useState({
  //   filename: false,
  //   url: false
  // })

  // const handleValidateUrl = (e) => {
  //   const exp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  //   const regex = new RegExp(exp);
  //   const { value } = e.target
  //   const validation = regex.test(value)
  //   setValidations({ ...validations, url: validation })
  // }

  // const optionsListRender = options.map(
  //   (option, index) =>
  //     <option key={'test-option-' + index} value={option.value}>{option.text}</option>
  // )

  const urlStyle = { color: errors?.url?.show ? 'red' : '' }

  const renderError = (show, message, name) => (
    <Collapse in={show}>
      <label htmlFor={name} className='form-label text-danger'>{message || ''}</label>
    </Collapse>
  )

  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body >
        <Card.Title className='text-center'>Información del archivo</Card.Title>
        <Container className='my-3'>
          <Row className='gy-2'>
            <Col xs={12} md={6}>
              <label htmlFor='filename' className='form-label'>Nombre del archivo:</label>
              <input id='filename' name='filename' onChange={handleSetFormChange} value={form.filename || ''} className='form-control' type='text' placeholder='Nombre' />
              {
                renderError(errors?.filename?.show, errors?.filename?.message, 'filename')
              }
            </Col>
            <Col xs={12} md={6}>
              <label htmlFor='select-group' className='form-label'>Grupo de carpeta:</label>
              <Creatable id='select-group' isClearable options={options} onChange={(option) => handleSetFormProperty(option, 'group')} value={form?.group || null} />
            </Col>
            <Col xs={12}>
              <label htmlFor='url' className='form-label'>Url:</label>
              <input style={urlStyle} id='url' name='url' onChange={handleSetFormChange} value={form.url || ''} className='form-control' type='text' placeholder='www.url.com' />
              {
                renderError(errors?.url?.show, errors?.url?.message, 'url')
              }
            </Col>
            <Col xs={12}>
              <label htmlFor='tags' className='form-label'>Etiquetas: [ delimitadores: . , enter ]</label>
              <TagsInput />
              {
                renderError(errors?.tags?.show, errors?.tags?.message, 'tags')
              }
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

export default FormFileData