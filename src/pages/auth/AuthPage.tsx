import { Container } from '@/components/ui'
import AuthForm from './module/AuthForm'

const AuthPage = () => {
  return (
    <Container>
      <main className='flex min-h-svh w-full items-center justify-center'>
        <div className='border-primary relative my-[42px] flex w-full max-w-[400px] flex-col items-end gap-3 border-2 border-solid bg-[#121212] px-10 py-6 pt-[42px]'>
          <img
            src='./images/logo.svg'
            className='absolute top-0 left-[50%] z-0 w-32 translate-x-[-50%] translate-y-[-50%] bg-[#121212] px-2'
            alt='Logotype'
          />
          <span className='text-md w-full text-center font-bold text-pretty'>
            Please log in to access the site
          </span>
          <AuthForm />
        </div>
      </main>
    </Container>
  )
}

export default AuthPage
