import React, { useState } from 'react'
import SearchInput from './components/SearchInput'
import list from '../../assets/files.json'
import sortListTypes from './helpers/sortListTypes'
import HeaderContent from './layouts/HeaderContent'
import FilesTable from './components/FilesTable'

const Searcher = () => {

  const [listFiles, setListFiles] = useState(sortListTypes(list))

  const handleFilterText = (file, tags) => {
    const title = file.title.toLowerCase()
    return tags.some(tag => title.includes(tag))
  }

  const handleFilterTags = (file, tags) => {
    return tags.some(tag => file.tags.includes(tag))
  }

  const handleFindArchive = (tags) => {
    if (tags.length > 0) {
      const first = list.filter(file => handleFilterText(file, tags))
      const second = list.filter(file => handleFilterTags(file, tags))
      const union = new Set([...first, ...second])
      setListFiles(sortListTypes([...union]))
    } else {
      setListFiles(list)
    }
  }

  return (
    <div>
      <HeaderContent />
      <SearchInput onChange={handleFindArchive} />
      <FilesTable data={listFiles} />
    </div>
  )
}

export default Searcher