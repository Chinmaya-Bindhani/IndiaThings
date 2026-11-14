import ProductCard from "./ProductCard.jsx";

export default function ProductList({
  products,
  categories,
  search,
  category,
  onCategoryChange,
  title,
  onAdd,
  onSelectProduct,
  onViewAll,
}) {
  const visible = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="products" className="mx-auto max-w-[1220px] px-4 py-10 sm:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Curated for you</p>
          <h2 className="mt-2 text-2xl font-bold text-emerald-950">{title}</h2>
        </div>
        <button className="text-sm font-semibold text-emerald-900 hover:underline" onClick={onViewAll}>View all</button>
      </div>
      <div className="mb-5 flex flex-wrap gap-[10px]">
        {categories.map((c) => (
          <button
            key={c}
            className={`rounded-full px-[18px] py-2 ${c === category ? "bg-emerald-900 text-white" : "bg-white text-slate-500"}`}
            aria-pressed={c === category}
            onClick={() => onCategoryChange(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-5 text-slate-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={onAdd} onSelect={onSelectProduct} />
          ))}
        </div>
      )}
    </section>
  );
}
