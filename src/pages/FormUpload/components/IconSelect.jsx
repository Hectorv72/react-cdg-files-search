import React, { useContext, useState } from 'react'
import FormContext from '../contexts/FormContext'

const IconSelect = ({ icon, name }) => {

  const { form, handleSetFormProperty } = useContext(FormContext)
  const size = { width: 32, height: 32 }
  const selected = form?.icon === name
  const className = `btn btn-sm btn-${selected ? '' : 'outline-'}dark d-flex justify-content-center align-items-center`

  return (
    <button onClick={() => !selected && handleSetFormProperty(name, 'icon')} className={className} style={size}>
      <i className={icon} style={{ fontSize: 18 }} />
    </button>
  )
}

export default IconSelect