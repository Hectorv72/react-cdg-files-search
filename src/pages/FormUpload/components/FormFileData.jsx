import React, { useContext, useState, useEffect } from 'react'
import Creatable from 'react-select/creatable'
import { Card, Container, Row, Col, Collapse } from 'react-bootstrap'
import FormContext from '../contexts/FormContext'
import TagsInput from './TagsInput'

const FormFileData = () => {
  const { form, errors, options, handleSetFormChange, handleSetFormProperty } = useContext(FormContext)
  const urlStyle = { color: errors?.url?.show ? 'red' : '' }

  const renderError = (show, message, name) => (
    <Collapse in={show}>
      <label htmlFor={name} className='form-label text-danger'>{message || ''}</label>
    </Collapse>
  )

  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body >
        {/* <Card.Title className='text-center'>Información del archivo</Card.Title> */}
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
              <Creatable id='select-group' isClearable options={options} onChange={(option) => handleSetFormProperty(option, 'group')} value={form.group} />
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
              <TagsInput tags={form?.tags?.map(tag => ({ id: tag, text: tag })) || []} />
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