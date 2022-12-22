export const fnSortByFilename = (a, b) => {
  if (a.filename > b.filename) {
    return 1
  } else if (a.filename < b.filename) {
    return -1
  } else {
    return 0
  }
}

export default (list = []) => {
  return list.sort(fnSortByFilename)
}
