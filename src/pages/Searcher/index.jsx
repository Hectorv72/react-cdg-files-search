import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import sortListTypes from './helpers/sortListTypes'
import HeaderContent from './layouts/HeaderContent'
import FilesTable from './components/FilesTable'
import getFiles from './helpers/getFiles'

const Searcher = () => {
  const [list, setList] = useState([])
  const [listFiles, setListFiles] = useState([])

  const handleFilterText = (file, tags) => {
    const filename = file.filename.toLowerCase()
    return tags.some(tag => filename.includes(tag))
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

  const handleGetFiles = async () => {
    const { ok, json } = await getFiles()
    ok && setList(json.files)
  }

  useEffect(() => {
    handleGetFiles()
  }, [])

  useEffect(() => {
    setListFiles(sortListTypes(list))
  }, [list])

  return (
    <div>
      <HeaderContent />
      <SearchInput onChange={handleFindArchive} />
      <FilesTable data={listFiles} />
    </div>
  )
}

export default Searcher