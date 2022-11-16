export default (errors, prop) => {
  if (errors[prop]) {
    errors[prop].show = false
  }
  return errors
}