import * as yup from 'yup'

export const schema = yup.object().shape({
  filename: yup.string().required(),
  url: yup.string().url(),
  tags: yup.array().required(),
})