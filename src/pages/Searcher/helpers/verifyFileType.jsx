export default (url) => {
  console.log(url)
  if (url.includes('spreadsheets')) {
    return 'spreadsheets'
  } else if (url.includes('document')) {
    return 'document'
  } else if (url.includes('folders')) {
    return 'folders'
  }
}