import React, { useState, useEffect } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import '../styles/ReactTags.css'
import { delimiters } from '../helpers/SearchInputHelpers.jsx'

const SearchInput = ({ keyDelimiters = delimiters, onChange = () => { } }) => {

  const [tags, setTags] = useState([])

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAdd = tag => {
    setTags([...tags, tag]);
  };

  useEffect(() => {
    onChange(tags.map(tag => tag.text.toLowerCase()))
    return () => { }
  }, [tags])


  // const handleTagClick = index => {
  //   console.log('The tag at index ' + index + ' was clicked');
  // };

  return (
    <ReactTags
      classNames={{
        tagInputField: 'form-control'
      }}
      tags={tags}
      allowDragDrop={false}
      // suggestions={suggestions}
      delimiters={keyDelimiters}
      handleDelete={handleDelete}
      handleAddition={handleAdd}
      // handleDrag={handleDrag}
      // handleTagClick={handleTagClick}
      inputFieldPosition="bottom"
      autocomplete
    />
  )
}

export default SearchInput