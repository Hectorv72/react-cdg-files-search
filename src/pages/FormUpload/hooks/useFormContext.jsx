import React, { useContext } from 'react'
import FormContext from '../contexts/FormContext'

const useFormContext = () => {
  const context = {
    filename: null,
    url: null,
    tags: [],
    group: null,
    type: null,
  }
  const { filename, url, tags, group, type } = useContext(FormContext)
  return { filename, url, tags, group, type }
}

export default useFormContext