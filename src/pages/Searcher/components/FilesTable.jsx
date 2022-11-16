import React from 'react'
import DataTable from 'react-data-table-component'
import ArchiveItemLayout from '../layouts/ArchiveItemLayout'

const renderColumns = [
  {
    name: 'Archivo',
    // grow: 1,
    selector: row => <ArchiveItemLayout data={row} />
  },
  {
    name: 'Grupo',
    grow: 0.1,
    selector: row => row.group,
  },
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

const FilesTable = ({ data }) => {
  const handleOpenLink = (file) => {
    window.open(file.url, '_blank', 'noopener,noreferrer');
  }

  return (
    <DataTable
      data={data}
      columns={renderColumns || [{}]}
      pagination={true}
      highlightOnHover={true}
      pointerOnHover={true}
      onRowClicked={handleOpenLink}
      noDataComponent={<label>No se encuentran elementos</label>}
      responsive={true}
    />
  )
}

export default FilesTable