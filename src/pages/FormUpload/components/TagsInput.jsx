import React, { useContext, useEffect, useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import { Delimiters } from '../../../utilities/keyCodeDelimiters'
import FormContext from '../contexts/FormContext'

const TagsInput = () => {
  const [tags, setTags] = useState([])
  const { handleSetFormTags } = useContext(FormContext)

  const handleDelete = i => setTags(tags.filter((tag, index) => index !== i))

  const handleAdd = tag => setTags([...tags, tag])

  useEffect(() => {
    handleSetFormTags(tags.map(tag => tag.text))
  }, [tags])

  return (
    <ReactTags
      id="tags"
      classNames={{
        tag: 'badge bg-primary p-2 m-1',
        tagInputField: 'form-control',
        selected: 'h-100 d-flex flex-wrap align-content-center',
        tags: 'h-100 d-flex flex-column'
      }}
      placeholder='Escribe aquí para agregar'
      tags={tags}
      allowDragDrop={false}
      delimiters={Delimiters}
      handleDelete={handleDelete}
      handleAddition={handleAdd}
      inputFieldPosition="top"
      autocomplete
    />
  )
}

export default TagsInput