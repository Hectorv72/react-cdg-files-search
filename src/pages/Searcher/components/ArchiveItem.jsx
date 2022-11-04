import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ArchiveItemLayout from '../layouts/ArchiveItemLayout'

const ArchiveItem = ({ title, url, tags, type }) => {
  return (
    <ListGroupItem>
      <ArchiveItemLayout data={{ title, url, type }} />
    </ListGroupItem>
  )
}

export default ArchiveItem