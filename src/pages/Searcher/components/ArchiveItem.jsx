import React from 'react'
import { ListGroupItem } from 'react-bootstrap'
import ArchiveItemLayout from '../layouts/ArchiveItemLayout'

const ArchiveItem = ({ title, url, tags, type }) => {
  return (
    <a className='link-dark list-group-item list-group-item-action' href={url} style={{ textDecoration: 'none' }}>
      <ArchiveItemLayout data={{ title, url, type }} />
    </a>
  )
}

export default ArchiveItem