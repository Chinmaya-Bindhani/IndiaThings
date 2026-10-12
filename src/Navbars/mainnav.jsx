import { Search, User, Heart, ShoppingCart } from "lucide-react";
import { Link } from 'react-router-dom'
function MainNav() {
  return (
    <div className="flex h-[65px] border border-neutral-200 items-center justify-between bg-white px-4 md:px-[7.2vw]">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Mercur logo" className="h-15 w-15" />
          <span className="text-xl font-semibold tracking-tight">Cartwell</span>
        </Link>
      </div>

      <div className="border border-neutral-500">
        <form className="flex cursor-pointer h-11 w-full max-w-[590px] overflow-hidden border border-neutral-300">
          <div className="flex flex-1 items-center gap-3 px-4">
            <Search size={20} className="text-neutral-500" />
            <input
              type="text"
              placeholder="Search products, brands and categories"
              className="w-full text-[15px] cursor-pointer outline-none placeholder:text-neutral-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#0a0a0a] px-6 font-mono cursor-pointer text-sm uppercase tracking-widest text-white hover:bg-neutral-800"
          >
            Search
          </button>
        </form>
      </div>

      <div>
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest hover:opacity-75"
          >
            <User size={20} />
            <span>Sign In</span>
          </Link>
          <button
            type="button"
            aria-label="Wishlist"
            className="hover:opacity-75"
          >
            <Heart size={20} />
          </button>
          <button type="button" aria-label="Cart" className="hover:opacity-75">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
