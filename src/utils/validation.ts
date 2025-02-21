import * as yup from 'yup'

export const loginSchema = yup.object({
  login: yup
    .string()
    .typeError('The Login field must be the string type')
    .required('Login is a required field')
    .min(5, 'The login must be 5 or more characters'),
  password: yup
    .string()
    .typeError('The Password field must be the string type')
    .required('Password is a required field')
    .min(8, 'The password must be 8 or more characters')
    .max(32, 'The password must be 32 characters or less.'),
})

export const planetEditSchema = yup.object({
  terrain: yup
    .string()
    .typeError('The Terrain field must be the string type')
    .min(4, 'Terrain field must be at least 4 characters long')
    .required('Terrain is a required field'),
  climate: yup
    .string()
    .typeError('The Climate field must be the string type')
    .min(4, 'Climate field must be at least 4 characters long')
    .required('Climate is a required field'),
  rotation_period: yup
    .string()
    .typeError('The Rotation period field must be the string type')
    .min(1, 'The Rotation period field must be 0 or greater')
    .required('Rotation period is a required field'),
  population: yup
    .string()
    .typeError('The Population field must be the string type')
    .min(1, 'The Population field must be 0 or greater')
    .required('Population is a required field'),
  diameter: yup
    .string()
    .typeError('The Diameter field must be the string type')
    .min(1, 'The Diameter field must be 0 or greater')
    .required('Diameter is a required field'),
})

export const filmEditSchema = yup.object({
  director: yup
    .string()
    .typeError('The Director field must be the string type')
    .min(4, 'Director field must be at least 4 characters long')
    .required('Director is a required field'),
  producer: yup
    .string()
    .typeError('The Producer field must be the string type')
    .min(4, 'Producer field must be at least 4 characters long')
    .required('Producer is a required field'),
  release_date: yup
    .string()
    .typeError('The Producer field must be the string type')
    .min(4, 'Producer field must be at least 4 characters long')
    .required('Producer is a required field'),
})

export const vehicleEditSchema = yup.object({
  model: yup
    .string()
    .typeError('The Model field must be the string type')
    .min(4, 'Model field must be at least 4 characters long')
    .required('Model is a required field'),
  vehicle_class: yup
    .string()
    .typeError('The Vehicle class field must be the string type')
    .min(4, 'Vehicle class field must be at least 4 characters long')
    .required('Vehicle class is a required field'),
  cost_in_credits: yup
    .string()
    .typeError('The Price field must be the string type')
    .min(1, 'Price field must be at least 4 characters long')
    .required('Price is a required field'),
  cargo_capacity: yup
    .string()
    .typeError('The Cargo capacity field must be the string type')
    .min(1, 'Cargo capacity field must be at least 4 characters long')
    .required('Cargo capacity is a required field'),
  length: yup
    .string()
    .typeError('The Length field must be the string type')
    .min(1, 'Length capacity field must be at least 4 characters long')
    .required('Length capacity is a required field'),
})
