import React, { useContext } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { IconsTypes } from '../../../utilities/IconsListTypes'
import FormContext from '../contexts/FormContext'
import IconSelect from './IconSelect'

const FormIconSelect = () => {
  const { form } = useContext(FormContext)

  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body >
        <Card.Title className='text-center'>Seleccionar icono</Card.Title>
        <Container className='my-2'>
          <div className='d-flex flex-wrap overflow-auto' style={{ maxHeight: '270px' }}>
            {
              Object.entries(IconsTypes).map(([name, icon], index) =>
                <div className='m-1 mx-2' key={'iconselect-' + index}>
                  <IconSelect icon={icon} name={name} />
                </div>
              )
            }
          </div>
          {/* <Row className='gy-2 overflow-auto' style={{ maxHeight: '270px' }}>
            {
              Object.entries(IconsTypes).map(([name, icon], index) =>
                <Col xs={'auto'} key={'iconselect-' + index}>
                  <IconSelect icon={icon} name={name} />
                </Col>
              )
            }
          </Row> */}
          {
            form?.icon &&
            <div className='text-center mt-2'>
              <div>Icono seleccionado:</div>
              <div>
                <i className={IconsTypes[form.icon]}></i> {form.icon}
              </div>
            </div>
          }
        </Container>

      </Card.Body>
    </Card>
  )
}

export default FormIconSelect