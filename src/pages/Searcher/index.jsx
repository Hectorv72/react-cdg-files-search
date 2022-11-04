import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import ArchiveItem from './components/ArchiveItem'
import SearchInput from './components/SearchInput'
import list from '../../assets/files.json'

const Searcher = () => {

  const [listFiles, setListFiles] = useState(list)

  const handleFilterText = (file, tags) => {
    const name = file.name.toLowerCase()
    return tags.some(tag => name.includes(tag))
  }

  const handleFilterTags = (file, tags) => {
    return tags.some(tag => file.tags.includes(tag))
  }

  const handleFindArchive = (tags) => {
    if (tags.length > 0) {
      const first = list.filter(file => handleFilterText(file, tags))
      const second = list.filter(file => handleFilterTags(file, tags))
      const union = new Set([...first, ...second])
      setListFiles([...union])
    } else {
      setListFiles(list)
    }
  }

  return (
    <div>
      <h1>Buscador</h1>
      <SearchInput onChange={handleFindArchive} />
      <ListGroup>
        {
          listFiles.map(
            ({ name, url, tags }, index) => <ArchiveItem key={`archive-item-${index}`} title={name} url={url} tags={tags} />
          )
        }
      </ListGroup>

    </div>
  )
}

export default Searcher