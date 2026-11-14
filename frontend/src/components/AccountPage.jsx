export default function AccountPage({ onShop, onOpenCart }) {
  return (
    <section className="mx-auto max-w-[900px] px-4 py-12 sm:px-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-800">Your Shopcart</p>
      <h1 className="mt-2 text-3xl font-bold text-emerald-950">Guest account</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        You&apos;re shopping as a guest. Account sign-in and user management will be connected with the upcoming account system.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <button className="rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800" onClick={onShop}>
          Continue shopping
        </button>
        <button className="rounded-full border border-emerald-900 px-6 py-3 text-sm font-semibold text-emerald-950 hover:bg-emerald-50" onClick={onOpenCart}>
          View cart
        </button>
      </div>
    </section>
  );
}
