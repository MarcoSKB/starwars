import * as yup from 'yup'

export const loginSchema = yup.object({
  login: yup
    .string()
    .required('Login is a required field')
    .min(5, 'The дщпшт must be 5 or more characters'),
  password: yup
    .string()
    .required('Password is a required field')
    .min(8, 'The password must be 8 or more characters')
    .max(32, 'The password must be 32 characters or less.'),
})
