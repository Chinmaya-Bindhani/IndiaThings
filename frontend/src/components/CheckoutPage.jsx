export default function CheckoutPage({ items, onBack, onPlaceOrder }) {
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-[900px] px-4 py-16 text-center sm:px-8">
        <h1 className="text-3xl font-bold text-emerald-950">Your cart is empty</h1>
        <p className="mt-3 text-slate-600">Add a product before continuing to checkout.</p>
        <button className="mt-6 rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800" onClick={onBack}>
          Browse products
        </button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1080px] px-4 py-10 sm:px-8">
      <button className="mb-6 text-sm font-semibold text-emerald-900 hover:underline" onClick={onBack}>← Back to shopping</button>
      <h1 className="text-3xl font-bold text-emerald-950">Checkout</h1>
      <p className="mt-2 text-sm text-slate-600">Demo checkout only. No payment will be processed.</p>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <form
          className="space-y-5 rounded-xl border border-slate-200 p-5 sm:p-7"
          onSubmit={(event) => {
            event.preventDefault();
            onPlaceOrder();
          }}
        >
          <h2 className="text-lg font-semibold text-slate-900">Delivery details</h2>
          <label className="block text-sm font-medium text-slate-700">
            Full name
            <input className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20" name="name" autoComplete="name" required />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Email address
            <input className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20" name="email" type="email" autoComplete="email" required />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Street address
            <input className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20" name="address" autoComplete="street-address" required />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              City
              <input className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20" name="city" autoComplete="address-level2" required />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Postal code
              <input className="mt-2 block w-full rounded-lg border border-slate-300 px-3 py-2.5 outline-none focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/20" name="postalCode" autoComplete="postal-code" required />
            </label>
          </div>
          <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600">Payment: Cash on delivery (demo)</p>
          <button className="w-full rounded-full bg-emerald-950 px-6 py-3 font-semibold text-white hover:bg-emerald-800" type="submit">
            Place demo order · ${total.toFixed(2)}
          </button>
        </form>

        <aside className="h-fit rounded-xl border border-slate-200 p-5 sm:p-7">
          <h2 className="text-lg font-semibold text-slate-900">Order summary</h2>
          <div className="mt-5 divide-y divide-slate-100">
            {items.map((item) => (
              <div className="flex justify-between gap-4 py-3 text-sm" key={item.id}>
                <span className="text-slate-600">{item.name} × {item.qty}</span>
                <strong className="text-slate-900">${(item.price * item.qty).toFixed(2)}</strong>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between border-t border-slate-200 pt-4 font-semibold text-slate-900">
            <span>Total</span><span>${total.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
