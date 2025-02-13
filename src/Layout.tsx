import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from '@utils/store'
import { Header, Footer } from '@components/module'

function Layout() {
  const isAuthed = useAppSelector((state) => state.auth.isAuthenticated)

  if (!isAuthed) {
    return <Navigate to='/auth' replace />
  }

  return (
    <>
      <Header />
      <main className='h-full'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
