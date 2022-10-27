import React, { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'
import '../styles/ReactTags.css'

const keyCodes = {
  comma: 188,
  enter: 13
};

const delimiters = [keyCodes.comma, keyCodes.enter];

const suggestions = [
  { id: 'Thailand', text: 'Thailand' },
  { id: 'India', text: 'India' },
  { id: 'Vietnam', text: 'Vietnam' },
  { id: 'Turkey', text: 'Turkey' }
]

const SearchInput = () => {

  const [tags, setTags] = useState([])

  const handleDelete = i => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAdd = tag => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = index => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div>
      <ReactTags
        tags={tags}
        suggestions={suggestions}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAdd}
        handleDrag={handleDrag}
        handleTagClick={handleTagClick}
        inputFieldPosition="bottom"
        autocomplete
      />
    </div>
  )
}

export default SearchInput