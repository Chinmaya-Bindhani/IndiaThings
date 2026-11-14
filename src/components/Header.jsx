import { useState } from "react";

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}

export default function Header({
  products,
  categories,
  search,
  setSearch,
  onSearch,
  count,
  openCart,
  onNavigate,
  onSelectCategory,
  onSelectProduct,
}) {
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const suggestions = search.trim()
    ? products.filter((product) => product.name.toLowerCase().includes(search.trim().toLowerCase())).slice(0, 5)
    : [];
  const navigate = (page) => {
    setCategoryMenuOpen(false);
    setMobileMenuOpen(false);
    onNavigate(page);
  };
  const selectCategory = (category) => {
    setCategoryMenuOpen(false);
    setMobileMenuOpen(false);
    onSelectCategory(category);
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <div className="border-t-4 border-amber-400 bg-emerald-950 text-white">
        <div className="mx-auto flex h-7 max-w-[1180px] items-center justify-between px-4 text-[10px] sm:px-8 sm:text-xs">
          <span className="hidden items-center gap-2 sm:flex">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 4h3l2 5-2 1.5a15 15 0 0 0 5.5 5.5L15 14l5 2v3c0 1-1 2-2 2C10 20 4 14 3 6c0-1 1-2 2-2Z" />
            </svg>
            <span>+001234567890</span>
          </span>
          <p className="flex-1 text-center">
            Get 50% Off on Selected Items
            <button className="ml-2 border-l border-white/40 pl-2 underline underline-offset-2" onClick={() => navigate("deals")}>Shop Now</button>
          </p>
          <div className="hidden gap-5 sm:flex"><span>Eng⌄</span><span>Location⌄</span></div>
        </div>
      </div>
      <nav className="relative mx-auto flex min-h-[68px] max-w-[1180px] items-center gap-3 px-4 sm:gap-5 sm:px-8 lg:gap-7">
        <button
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-emerald-950 sm:text-2xl"
          onClick={() => navigate("home")}
          aria-label="Shopcart home"
        >
          <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h3l3.2 14h14.2l3.3-10H8" /><circle cx="12" cy="25" r="1.5" /><circle cx="22" cy="25" r="1.5" />
            <path d="M13 5c1-3 5-3 6 0" stroke="#f59e0b" />
          </svg>
          <span className="hidden min-[420px]:inline">Shopcart</span>
        </button>

        <div className="relative shrink-0">
          <button
            className="flex items-center gap-1 text-xs font-medium text-slate-800 hover:text-emerald-800 sm:text-sm"
            aria-expanded={categoryMenuOpen}
            onClick={() => setCategoryMenuOpen((open) => !open)}
          >
            <span className="hidden sm:inline">Categories</span>
            <span className="sm:hidden">Shop</span>
            <span aria-hidden="true">⌄</span>
          </button>
          {categoryMenuOpen && (
            <div className="absolute left-0 top-[calc(100%+22px)] z-40 min-w-44 overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl">
              {categories.map((category) => (
                <button
                  key={category}
                  className="block w-full px-4 py-2 text-left text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-900"
                  onClick={() => selectCategory(category)}
                >
                  {category === "All" ? "All Categories" : category}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="hidden shrink-0 items-center gap-4 text-sm font-medium text-slate-800 lg:flex">
          <button className="hover:text-emerald-800" onClick={() => navigate("deals")}>Deals</button>
          <button className="hover:text-emerald-800" onClick={() => navigate("new")}>What&apos;s New</button>
          <button className="hover:text-emerald-800" onClick={() => navigate("delivery")}>Delivery</button>
        </div>

        <form
          className="relative ml-auto min-w-0 flex-1 lg:ml-0 lg:max-w-[300px]"
          onSubmit={(event) => {
            event.preventDefault();
            onSearch();
          }}
        >
          <div className="flex h-10 items-center gap-2 rounded-full bg-slate-100 px-3 text-slate-500 focus-within:ring-2 focus-within:ring-emerald-800/20 sm:px-4">
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
              type="search"
              placeholder="Search Product"
              aria-label="Search products"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit" className="shrink-0 hover:text-emerald-800" aria-label="Search">
              <SearchIcon />
            </button>
          </div>
          {search.trim() && (
            <div className="absolute left-1/2 top-[calc(100%+8px)] z-40 max-h-[min(70vh,420px)] w-[min(92vw,360px)] -translate-x-1/2 overflow-y-auto rounded-xl border border-slate-100 bg-white shadow-xl sm:left-0 sm:right-auto sm:w-auto sm:translate-x-0 sm:min-w-[360px]">
              {suggestions.length ? suggestions.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  className="flex w-full items-center gap-3 border-b border-slate-100 px-4 py-3 text-left last:border-0 hover:bg-slate-50"
                  onClick={() => {
                    onSelectProduct(product);
                    setSearch("");
                  }}
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-100 text-xl">{product.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-slate-900">{product.name}</span>
                    <span className="mt-1 flex items-center gap-1 text-[11px]">
                      <span className="tracking-wide text-green-600">★★★★★</span>
                      <span className="text-slate-500">({product.rating})</span>
                    </span>
                  </span>
                  <strong className="text-sm text-slate-900">${product.price.toFixed(2)}</strong>
                </button>
              )) : <p className="px-4 py-5 text-sm text-slate-500">No matching products found.</p>}
            </div>
          )}
        </form>

        <button
          className="shrink-0 text-sm text-slate-800 hover:text-emerald-800"
          onClick={() => navigate("account")}
          aria-label="Account"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="8" r="3.2" /><path d="M5.5 20c.5-3.5 2.7-5.3 6.5-5.3s6 1.8 6.5 5.3" />
          </svg>
          <span className="hidden md:inline">Account</span>
        </button>
        <button
          className="flex shrink-0 items-center gap-1 text-sm text-slate-800 hover:text-emerald-800"
          onClick={openCart}
          aria-label={`Cart, ${count} items`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 4h2l2.2 11.1a2 2 0 0 0 2 1.6h8.4a2 2 0 0 0 1.9-1.5L21 8H6" />
            <circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" />
          </svg>
          <span className="hidden md:inline">Cart</span>
          <span className="rounded-full bg-emerald-900 px-1.5 py-0.5 text-[10px] text-white">{count}</span>
        </button>

        <button
          className="shrink-0 text-xs font-medium text-emerald-900 lg:hidden"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          More
        </button>
        {mobileMenuOpen && (
          <div className="absolute right-4 top-[calc(100%-4px)] z-40 grid min-w-40 gap-1 rounded-xl border border-slate-100 bg-white p-2 shadow-xl sm:right-8">
            <button className="px-3 py-2 text-left text-sm hover:bg-emerald-50" onClick={() => navigate("deals")}>Deals</button>
            <button className="px-3 py-2 text-left text-sm hover:bg-emerald-50" onClick={() => navigate("new")}>What&apos;s New</button>
            <button className="px-3 py-2 text-left text-sm hover:bg-emerald-50" onClick={() => navigate("delivery")}>Delivery</button>
            <button className="px-3 py-2 text-left text-sm hover:bg-emerald-50" onClick={() => navigate("account")}>Account</button>
          </div>
        )}
      </nav>
    </header>
  );
}
