import * as yup from 'yup'

export const schema = yup.object().shape({
  filename: yup.string().required(),
  group: yup.string().required(),
  url: yup.string().url(),
  tags: yup.array().required(),
})


export const validateSchema = async data => {
  let isValid = true
  const errors = {}
  console.log(data)
  try {
    await schema.validate(data, { abortEarly: false })
  } catch (err) {
    console.log(err.inner)
    isValid = false
    if (err?.inner) {
      errors.inner.forEach(
        ({ path, message }) => { errors[path] = { message, show: true } }
      )
    }
  }

  return { errors, isValid }
}