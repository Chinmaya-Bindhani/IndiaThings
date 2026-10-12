import { Store, LifeBuoy, Globe, ChevronDown } from 'lucide-react'

function MiniNav() {
  return (
    <div className="flex h-[35px] items-center bg-[#0a0a0a] px-4 text-sm text-white md:px-[7.2vw]">
      <p className="mr-auto text-l text-neutral-300">
        Free delivery on orders over - <strong className="font-bold">$99.00</strong>
      </p>

      <ul className="hidden items-center gap-5 font-mono text-xs uppercase tracking-widest md:flex">
        <li>
          <a href="#" className="flex items-center gap-1.5 hover:opacity-75">
            <Store size={16} />
            <span>Sell on CartWell</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-1.5 hover:opacity-75">
            <LifeBuoy size={16} />
            <span>Help</span>
          </a>
        </li>
        <li>
          <a href="#" className="hover:opacity-75">
            Track Order
          </a>
        </li>
      </ul>

      <button
        type="button"
        className="ml-5 hidden items-center gap-1.5 border-l border-[#3a3a3a] pl-5 font-mono text-xs uppercase tracking-widest hover:opacity-75 md:flex"
      >
        <Globe size={16} />
        <span>United States · USD</span>
        <ChevronDown size={14} />
      </button>
    </div>
  )
}

export default MiniNav