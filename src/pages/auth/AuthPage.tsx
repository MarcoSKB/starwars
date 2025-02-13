import { SubmitHandler, useForm } from 'react-hook-form'
import { Button, Container } from '@/components/ui'

interface Inputs {
  login: string
  password: string
}

const AuthPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  return (
    <Container>
      <main className='flex min-h-svh w-full items-center justify-center'>
        <form
          className='border-primary relative flex flex-col items-end gap-3 border-2 border-solid bg-[#121212] px-10 py-6 pt-[42px]'
          onSubmit={handleSubmit(onSubmit)}
        >
          <img
            src='./images/logo.svg'
            className='absolute top-0 left-[50%] z-0 w-32 translate-x-[-50%] translate-y-[-50%] bg-[#121212] px-2'
            alt='Logotype'
          />
          <span className='text-md max-w-[240px] font-bold text-pretty'>
            Please log in to access the site
          </span>
          {errors.login && errors.login && (
            <div className='w-full text-red-400'>
              Incorrect login or password*
            </div>
          )}
          <div className='mb-4 flex w-full flex-col gap-3'>
            <label className='flex flex-col gap-2 text-base'>
              Login:
              <input
                type='text'
                className='focus-visible:outline-accent bg-white px-4 py-2 text-black outline-2 outline-double'
                placeholder='Enter your login'
                {...register('login', { required: true })}
              />
            </label>
            <label className='flex flex-col gap-2 text-base'>
              Password:
              <input
                type='password'
                className='focus-visible:outline-accent bg-white px-4 py-2 text-black outline-2 outline-double'
                placeholder='Enter your password'
                {...register('password', { required: true })}
              />
            </label>
          </div>
          <div className='w-full max-w-1/2'>
            <Button type='submit' title='Log in' />
          </div>
        </form>
      </main>
    </Container>
  )
}

export default AuthPage
