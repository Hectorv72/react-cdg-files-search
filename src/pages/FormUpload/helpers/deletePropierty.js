export default (object, property) => {
  delete object[property]
  return object
}