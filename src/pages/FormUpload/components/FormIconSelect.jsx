import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { IconsTypes } from '../../../utilities/IconsListTypes'
import IconSelect from './IconSelect'

const FormIconSelect = () => {


  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body>
        <div className='d-flex flex-column align-items-center justify-content-center h-100'>
          <Card.Title>Seleccionar icono</Card.Title>
          <Row className='gy-2 overflow-auto' style={{ height: `${200}px` }}>
            {
              Object.entries(IconsTypes).map(([name, icon], index) =>
                <Col xs={'auto'} key={'iconselect-' + index}>
                  <IconSelect icon={icon} name={name} />
                </Col>
              )
            }
          </Row>
        </div>

      </Card.Body>
    </Card>
  )
}

export default FormIconSelect