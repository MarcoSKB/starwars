import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@components/module'

function Layout() {
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
