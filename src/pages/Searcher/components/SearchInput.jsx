import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import '../styles/ReactTags.css'
import { delimiters } from '../helpers/SearchInputHelpers'

const SearchInput = ({ keyDelimiters = delimiters, onChange = () => { } }) => {

  const [tags, setTags] = useState([{ id: 'asd', text: 'asd' }])

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAdd = tag => {
    setTags([...tags, tag]);
  };

  useEffect(() => {
    console.log(tags)
    onChange(tags.map(tag => tag.text.toLowerCase()))
    return () => { }
  }, [tags])


  // const handleTagClick = index => {
  //   console.log('The tag at index ' + index + ' was clicked');
  // };

  return (
    <div className='m-3'>
      <ReactTags
        classNames={{
          tag: 'badge bg-primary p-2 m-1',
          tagInputField: 'form-control',
        }}
        placeholder='🔍 Escribe aquí para buscar'
        tags={tags}
        allowDragDrop={false}
        // suggestions={suggestions}
        delimiters={keyDelimiters}
        handleDelete={handleDelete}
        handleAddition={handleAdd}
        inputFieldPosition="top"
        // handleDrag={handleDrag}
        // handleTagClick={handleTagClick}
        autocomplete
      />
    </div>
  )
}

export default SearchInput