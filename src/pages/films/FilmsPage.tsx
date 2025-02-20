import { Outlet } from 'react-router-dom'
import { FilmsSection } from './module'

const FilmsPage = () => {
  return (
    <div>
      <FilmsSection />
      <Outlet />
    </div>
  )
}

export default FilmsPage
