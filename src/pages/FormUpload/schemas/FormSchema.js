import * as yup from 'yup'

export const schema = yup.object().shape({
  filename: yup.string().trim().required('El nombre del archivo es requerido').min(5, 'Debe contener almenos 5 caracteres'),
  url: yup.string().required('La url es requerida').url('El formato de la url no es correcto'),
  // tags: yup.array().required(),
})


export const validateSchema = async data => {
  let isValid = true
  const errors = {}
  await schema.validate(data, { abortEarly: false })
    .catch(err => {
      isValid = false
      if (err?.inner) {
        err.inner.forEach(
          ({ path, message }) => { errors[path] = { message, show: true } }
        )
      }
    })
  return { errors, isValid }
}