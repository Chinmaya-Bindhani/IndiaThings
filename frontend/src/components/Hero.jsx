export default function Hero() {
  return (
    <section className="mx-auto grid min-h-[330px] max-w-[1220px] overflow-hidden bg-[#a8dceb] md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative z-10 flex flex-col items-start justify-center px-6 py-10 sm:px-10 md:px-12 lg:px-[72px]">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-900">The new season is here</p>
        <h1 className="max-w-[440px] text-3xl font-extrabold leading-tight text-emerald-950 sm:text-4xl lg:text-[44px]">Shopping Across Departments</h1>
        <p className="mt-4 max-w-[400px] text-sm leading-6 text-slate-800 sm:text-base">Find everyday essentials and your favorite new gadgets, all in one place.</p>
        <a className="mt-6 rounded-full bg-emerald-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800" href="#products">Learn More</a>
      </div>
      <div aria-hidden="true" className="relative hidden min-h-[330px] overflow-hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-b from-[#a8dceb] via-[#d2eced] to-[#e8d1b3]" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#d9c2a4]" />
        <div className="absolute bottom-[62px] right-[-5%] h-24 w-[83%] rotate-[-5deg] rounded-sm bg-[#edc137] shadow-xl" />
        <div className="absolute bottom-[142px] right-[-3%] h-20 w-[62%] rotate-[-5deg] rounded-sm bg-[#f5d252] shadow-lg" />
        <div className="absolute bottom-[105px] right-[22%] grid h-36 w-28 rotate-[-4deg] place-items-center rounded-t-[40%] bg-white/80 text-6xl shadow-lg">🛍️</div>
        <div className="absolute bottom-[128px] right-[5%] grid h-28 w-24 rotate-[5deg] place-items-center rounded-xl bg-emerald-800 text-5xl shadow-lg">🎒</div>
        <div className="absolute bottom-[92px] right-[43%] text-6xl drop-shadow-md">🎧</div>
        <div className="absolute bottom-[105px] right-[9%] text-6xl drop-shadow-md">📱</div>
      </div>
    </section>
  );
}
