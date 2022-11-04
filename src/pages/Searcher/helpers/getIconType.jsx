const style = 'solid'

const types = {
  spreadsheets: `fa-${style} fa-file-excel`,
  document: `fa-${style} fa-file-lines`,
  folders: `fa-${style} fa-folder`,
}

export default (type) => {
  return types[type] || `fa-${style} fa-file`
}