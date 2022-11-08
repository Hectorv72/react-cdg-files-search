import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { IconsTypes } from '../../../utilities/IconsListTypes'

const FormIconSelect = () => {

  return (
    <Card className='shadow border-0 h-100'>
      <Card.Body>
        <Card.Title>Seleccionar icono</Card.Title>
        <Row className='gy-2 overflow-scroll'>
          {
            Object.entries(IconsTypes).map(([key, icon], index) =>
              <Col xs={'auto'} key={'iconselect-' + index}>
                <div className='container border border-2 border-dark d-flex justify-content-center align-items-center' style={{ width: 32, height: 32 }}>
                  <i className={icon} />
                  {/* <div>{key}</div> */}
                </div>
              </Col>
            )
          }

        </Row>
      </Card.Body>
    </Card>
  )
}

export default FormIconSelect