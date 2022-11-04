const order = [
  "folder",
  "spreadsheets",
  "document",
  ""
]

export default (list = []) => {
  return list.sort((a, b) => order.indexOf(a.type) - order.indexOf(b.type))
}