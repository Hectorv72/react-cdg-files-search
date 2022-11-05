const order = [
  "folder",
  "spreadsheets",
  "document",
  ""
]

export const fnSortListTypes = (a, b) => order.indexOf(a.type) - order.indexOf(b.type)

export default (list = []) => {
  return list.sort(fnSortListTypes)
}
