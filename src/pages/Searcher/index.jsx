import React from 'react'
import { ListGroup } from 'react-bootstrap'
import ArchiveItem from './components/ArchiveItem'
import SearchInput from './components/SearchInput'

const Searcher = () => {
  return (
    <div>
      <h1>Buscador</h1>
      <SearchInput />
      <ListGroup>
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
        <ArchiveItem />
      </ListGroup>

    </div>
  )
}

export default Searcher