import React, { useState, useEffect } from 'react'
import SearchInput from './components/SearchInput'
import sortListTypes from './helpers/sortListTypes'
import FilesTable from './components/FilesTable'
import useFecthToken from '../../hooks/useFecthToken'
import { useQuery } from 'react-query'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Searcher = () => {
  const [listFiles, setListFiles] = useState([])
  const fetchToken = useFecthToken()

  const handleFilterGroups = (file, tags) => {
    const group = file.group.toLowerCase()
    return tags.some(tag => tag === group)
  }

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
      const third = list.filter(file => handleFilterGroups(file, tags))
      const union = new Set([...first, ...second, ...third])
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

  const { data: list, isLoading } = useQuery('files-search', handleGetFiles)

  useEffect(() => {
    handleGetFiles()
  }, [])

  useEffect(() => {
    list && setListFiles(sortListTypes(list))
  }, [list])

  return (
    <div>
      <Container className='mt-5'>
        <Card className='shadow border-0 h-100 p-2'>
          <Card.Body>
            <div className='d-flex flex-row'>
              <div className='flex-fill'>
                <SearchInput onChange={handleFindArchive} />
              </div>
              <div className='d-flex flex-row align-items-center'>
                <Link to={'/upload'} className='btn btn-sm btn-outline-primary d-flex flex-row gap-2 align-items-center'>
                  <i className="fa-solid fa-arrow-up-from-bracket"></i>
                  Agregar
                </Link>
              </div>
            </div>
            {
              isLoading
                ? <div className='text-center'>Cargando...</div>
                : <FilesTable data={listFiles} />
            }
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default Searcher