import React, { useContext, useState } from 'react'
import FormContext from '../contexts/FormContext'

const IconSelect = ({ icon, name }) => {

  const { form, handleSetFormProperty } = useContext(FormContext)
  const size = { width: 32, height: 32 }
  const selected = form?.type === name
  const className = `btn btn-sm btn-${selected ? '' : 'outline-'}dark d-flex justify-content-center align-items-center`

  return (
    <button onClick={() => !selected && handleSetFormProperty(name, 'type')} className={className} style={size}>
      <i className={icon} style={{ fontSize: 20 }} />
    </button>
  )
}

export default IconSelect