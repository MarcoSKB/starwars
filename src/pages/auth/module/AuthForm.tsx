import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useAppDispatch } from '@utils/store'
import { LOGIN, PASSWORD } from '@/utils/constants'
import { loginSchema } from '@utils/validation'
import { login as authLogin } from '@features/auth/authSlice'
import { Button, ErrorForm, Input } from '@components/ui'

interface Input {
  login: string
  password: string
}

const AuthForm = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(loginSchema) })

  const onSubmit: SubmitHandler<Input> = ({ login, password }) => {
    if (login !== LOGIN || password !== PASSWORD) {
      return setError('login', { message: 'Wrong login or password' })
    }

    dispatch(authLogin())
    navigate('/', { replace: true })
  }

  return (
    <form
      className='flex w-full flex-col items-end gap-3'
      onSubmit={handleSubmit(onSubmit)}
    >
      <ErrorForm errors={errors} />
      <label className='flex w-full flex-col gap-2 text-base'>
        Login:
        <Input
          type='text'
          placeholder='Enter your login'
          {...register('login')}
        />
      </label>
      <label className='mb-4 flex w-full flex-col gap-2 text-base'>
        Password:
        <Input
          type='password'
          placeholder='Enter your password'
          {...register('password')}
        />
      </label>
      <Button type='submit' className='w-full max-w-1/2'>
        Log in
      </Button>
    </form>
  )
}

export default AuthForm
