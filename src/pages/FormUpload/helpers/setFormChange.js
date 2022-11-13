export default ({ target }, state) => {
  const { name, value } = target
  if (value) {
    return { ...state, [name]: value }
  } else {
    delete state[name]
    return { ...state }
  }
}