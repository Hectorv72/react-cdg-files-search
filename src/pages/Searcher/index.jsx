import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import FilesTable from './components/FilesTable'
import SearchInput from './components/SearchInput'
import sortListTypes from './helpers/sortListTypes'
import useFecthToken from '../../hooks/useFecthToken'
import sortByFilename from './helpers/sortByFilename'
import sortFiles from './helpers/sortFiles'
import options from './helpers/selectOptions'

const Searcher = () => {
  const [listFiles, setListFiles] = useState([])
  const [type, setType] = useState(null)
  const [tags, setTags] = useState([])
  const fetchToken = useFecthToken()

  const handleFindArchive = () => {
    let sorted = list
    if (sorted) {
      tags.length > 0 && (sorted = sortFiles(list, tags))
      type && (sorted = sorted.filter(row => row.type === type))
      setListFiles(handleSortRows([...sorted]))
    }
  }

  const handleSortRows = (list) => {
    const sorted = sortByFilename([...list])
    return sortListTypes([...sorted])
  }

  const handleGetFiles = async () => {
    try {
      const { ok, data } = await fetchToken.get('/file')
      return ok ? handleSortRows([...data.files]) : []
    } catch (error) {
      console.log(error)
    }
  }

  const { data: list, isLoading } = useQuery('files-search', handleGetFiles)

  useEffect(() => {
    handleFindArchive()
  }, [type, tags])

  useEffect(() => {
    list && setListFiles(sortListTypes(list))
  }, [list])

  return (
    <div>
      <Container className='mt-5'>
        <Card className='shadow border-0 h-100 p-2'>
          <Card.Body>
            <div className='d-flex flex-row'>
              <div style={{ marginTop: 16 }}>
                <Select defaultValue={options[0]} options={options} onChange={({ value }) => setType(value)} />
              </div>
              <div className='flex-fill'>
                <SearchInput onChange={(tags) => setTags(tags)} />
              </div>
              <div style={{ marginTop: 16 }}>
                <Link to={'/upload'} style={{ height: 38 }} className='btn btn-sm btn-outline-primary d-flex flex-row gap-2 align-items-center'>
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