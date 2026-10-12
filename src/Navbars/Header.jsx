import MiniNav from './mininav'
import MainNav from './mainnav'
import CategoryNav from './categories'

function Header() {
  return (
    <header>
      <MiniNav />
      <MainNav />
      <CategoryNav />
    </header>
  )
}

export default Header