import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import ArchiveItem from './components/ArchiveItem'
import SearchInput from './components/SearchInput'
import list from '../../assets/files.json'
import sortListTypes from './helpers/sortListTypes'
import HeaderContent from './layouts/HeaderContent'
import DataTable from 'react-data-table-component'
import ArchiveItemLayout from './layouts/ArchiveItemLayout'

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

  const renderColumns = [
    {
      name: 'Archivo',
      // grow: 1,
      selector: row => <ArchiveItemLayout data={row} />
    },
    // {
    //   name: 'Tipo',
    //   selector: row => row.type,
    // },
    {
      name: 'Acciones',
      grow: 0.02,
      selector: row => <div><button className='btn'><i className="fa-solid fa-pencil"></i></button></div>
    }
    // {
    //   name: 'Url',
    //   selector: row => row.url
    // }
  ]

  return (
    <div>
      <HeaderContent />
      <SearchInput onChange={handleFindArchive} />
      <DataTable
        data={listFiles}
        columns={renderColumns || [{}]}
        pagination={true}
        highlightOnHover={true}
        pointerOnHover={true}
        onRowClicked={(row, event) => console.log(row, event)}
      />
      {/* <ListGroup>
        {
          listFiles.map(renderItem)
        }
      </ListGroup> */}

    </div>
  )
}

export default Searcher