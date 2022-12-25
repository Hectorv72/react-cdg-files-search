export default (errors) => {
  const objError = {}
  Object.entries(errors).forEach(
    ([key, message]) => {
      objError[key] = { message, show: true }
    }
  )
  return objError
}