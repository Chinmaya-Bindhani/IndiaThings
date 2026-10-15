import { Outlet } from 'react-router-dom'
import Header from './Navbars/Header'

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout