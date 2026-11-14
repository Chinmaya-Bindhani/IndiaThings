import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import '@google/model-viewer'  // for 3d model 


function Hero() {
  return (
    <section className="grid items-center gap-12 px-4 py-16 md:grid-cols-2 md:gap-20 md:px-[7.2vw] md:py-24">
      {/* Left: text */}
      <div>
        <span className="inline-block bg-neutral-100 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest">
          New arrivals · SS 2025
        </span>

        <h1 className="mt-8 max-w-xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Tech that fits your everyday life
        </h1>

        <p className="mt-8 max-w-md leading-relaxed text-neutral-600">
          Precision-engineered acoustic architecture, sculptural matte surfaces,
          and intuitive tactile control designed for focused living.
        </p>

        <div className="mt-10 flex items-center gap-8">
          <Link
            to="/"
            className="bg-[#0a0a0a] px-8 py-4 font-mono text-xs uppercase tracking-widest text-white transition-colors hover:bg-neutral-800"
          >
            Shop now
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 border-b border-black pb-1 font-mono text-xs uppercase tracking-widest transition-colors hover:border-blue-400 hover:text-blue-400"
          >
            View all categories
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Right: product block */}
      <div className=" p-0.1 md:p-0.2">
          <div className="h-[420px] w-full md:h-[560px]">
            <model-viewer
              src="/headphone.glb"
              alt="Cartwell Studio Pro ANC"
              auto-rotate
              camera-controls
              disable-zoom
              bounds="tight"
              shadow-intensity="1"
              environment-image="neutral"
              camera-orbit="0deg 75deg 105%"
              style={{
                width: '100%',
                height: '100%',
                background: 'transparent',
                '--poster-color': 'transparent',
              }}
            />
          </div>

        <div className="mt-5 flex w-fit items-center gap-6 bg-white px-4 py-3 shadow-sm">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              Featured product
            </p>
            <p className="text-sm font-semibold">Cartwell Studio Pro ANC</p>
          </div>
          <div className="border-l border-neutral-200 pl-6">
            <p className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              MSRP
            </p>
            <p className="font-mono text-sm font-semibold">$389.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero