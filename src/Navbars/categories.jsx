import { ChevronDown } from 'lucide-react'

const categories = [
  'Audio',
  'Power & Charging',
  'Computer Accessories',
  'Mobile & Tablets',
  'Gaming',
  'Smart Home',
  'Wearables',
  'Cameras & Drones',
]

function CategoryNav() {
  return (
    <nav className="h-[47px] overflow-x-auto border-y border-neutral-200 bg-white px-4 md:px-[7.2vw]">
      <ul className="flex h-full  justify-center items-center gap-8 whitespace-nowrap">
        {categories.map((name) => (
          <li key={name}>
            <a
              href="#"
              className="flex items-center  hover:text-blue-500 gap-1 font-mono text-xs uppercase tracking-widest text-neutral-800 hover:opacity-75"
            >
              {name}
              <ChevronDown size={14} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default CategoryNav