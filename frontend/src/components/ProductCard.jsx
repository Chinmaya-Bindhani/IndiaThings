export default function ProductCard({ product, onAdd, onSelect }) {
  const { id, name, category, price, old, rating, icon } = product;
  const discount = Math.round(((old - price) / old) * 100);

  return (
    <article className="relative rounded-2xl border border-slate-100 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <span className="absolute left-6 top-6 z-10 rounded-full bg-rose-100 px-2.5 py-1 text-xs font-semibold text-rose-700">-{discount}%</span>
      <button className="mb-3 grid h-[190px] w-full place-items-center rounded-xl bg-slate-50 text-7xl" onClick={() => onSelect(product)} aria-label={`View ${name}`}>{icon}</button>
      <p className="text-[0.8rem] text-slate-500">{category}</p>
      <h3 className="my-1 text-base"><button className="text-left font-semibold hover:text-emerald-800" onClick={() => onSelect(product)}>{name}</button></h3>
      <p className="mb-[10px] text-[0.85rem]"><span className="text-amber-500">★★★★★</span> <span className="text-slate-500">{rating}</span></p>
      <div className="flex items-center justify-between">
        <div>
          <strong className="text-emerald-950">${price.toFixed(2)}</strong> <s className="text-[0.85rem] text-slate-500">${old.toFixed(2)}</s>
        </div>
        <button className="rounded-full bg-emerald-950 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800" onClick={() => onAdd(id)}>Add</button>
      </div>
    </article>
  );
}
