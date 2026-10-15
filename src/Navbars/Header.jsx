import MiniNav from './mininav'
import MainNav from './mainnav'
import CategoryNav from './categories'

function Header() {
  return (
    <>
      <MiniNav />
      <header className="sticky top-0 z-50">
        <MainNav />
        <CategoryNav />
      </header>
    </>
  )
}

export default Header