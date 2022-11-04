import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ArchiveItemLayout from '../layouts/ArchiveItemLayout'

const ArchiveItem = ({ title, url, tags }) => {
  return (
    <ListGroupItem>
      <ArchiveItemLayout data={{ title, url }} />
    </ListGroupItem>
  )
}

export default ArchiveItem