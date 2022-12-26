import React from 'react'
import DataTable from 'react-data-table-component'
import openLink from '../helpers/openLink'
import ArchiveItemLayout from '../layouts/ArchiveItemLayout'
import RowActions from './RowActions'

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
    grow: 0.1,
    selector: row => <RowActions row={row} />
  }
  // {
  //   name: 'Url',
  //   selector: row => row.url
  // }
]

const FilesTable = ({ data }) => {

  return (
    <DataTable
      data={data}
      columns={renderColumns || [{}]}
      pagination={true}
      highlightOnHover={true}
      pointerOnHover={true}
      onRowClicked={({ url }) => openLink(url)}
      noDataComponent={<label className='my-4'>No se encuentran elementos</label>}
      responsive={true}
      paginationPerPage={5}
      paginationRowsPerPageOptions={[5, 10, 15]}
      paginationComponentOptions={
        { rowsPerPageText: "filas por pagina" }
      }
    />
  )
}

export default FilesTable