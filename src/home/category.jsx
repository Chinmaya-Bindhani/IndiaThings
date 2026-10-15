import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const categories = [
  { name: 'Audio Essentials', image: '/airpods.png', to: '/' },
  { name: 'Power & Charging', image: '/magsafe.png', to: '/' },
  { name: 'Desk Accessories', image: '/desk.png', to: '/' },
  { name: 'Smart Living', image: '/watch.png', to: '/' },
]

function ShopCategory() {
  return (
    <section className="px-4 py-16 md:px-[7.2vw]">
      {/* Heading row */}
      <div className="flex items-end justify-between border-b border-neutral-200 pb-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            Curated department
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight">
            Shop by Category
          </h2>
        </div>
        <Link
          to="/"
          className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest transition-colors hover:text-blue-400"
        >
          View all categories
          <ArrowRight size={12} />
        </Link>
      </div>

      {/* Cards */}
      <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={cat.to}
            className="group bg-neutral-100 p-5"
          >
            <div className="flex aspect-square items-center justify-center ">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-4/5 w-4/5 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
              <span className="font-mono text-[11px] uppercase tracking-widest">
                {cat.name}
              </span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default ShopCategory