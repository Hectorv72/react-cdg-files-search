import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import sortListTypes from './helpers/sortListTypes'
import HeaderContent from './components/HeaderContent'
import FilesTable from './components/FilesTable'
import useFecthToken from '../../hooks/useFecthToken'
import { useQuery } from 'react-query'

const Searcher = () => {
  const [listFiles, setListFiles] = useState([])
  const fetchToken = useFecthToken()

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
    try {
      const { ok, data } = await fetchToken.get('/file')
      return ok ? data.files : []
    } catch (error) {
      console.log(error)
    }
  }

  const { data: list } = useQuery('files-search', handleGetFiles)

  useEffect(() => {
    handleGetFiles()
  }, [])

  useEffect(() => {
    list && setListFiles(sortListTypes(list))
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