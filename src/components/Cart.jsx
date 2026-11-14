export default function Cart({ open, items, onClose, onQty, onCheckout }) {
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <>
      {open && <div className="fixed inset-0 z-40 bg-black/40" onClick={onClose} />}
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-[360px] max-w-full flex-col bg-white transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between border-b border-slate-200 p-5">
          <h2 className="m-0">Your Cart</h2>
          <button className="bg-transparent text-[1.2rem]" onClick={onClose}>✕</button>
        </div>

        <div className="flex-1 overflow-y-auto px-5">
          {items.length === 0 && <p className="py-5 text-slate-500">Your cart is empty.</p>}
          {items.map((i) => (
            <div className="flex items-center gap-3 border-b border-slate-100 py-[14px]" key={i.id}>
              <span className="rounded-[10px] bg-slate-100 p-2 text-[2rem]">{i.icon}</span>
              <div className="flex-1 text-[0.9rem]">
                <p>{i.name}</p>
                <strong>${i.price * i.qty}</strong>
              </div>
              <div className="flex items-center gap-2">
                <button className="h-[26px] w-[26px] rounded-full bg-slate-100" onClick={() => onQty(i.id, -1)}>−</button>
                <span>{i.qty}</span>
                <button className="h-[26px] w-[26px] rounded-full bg-slate-100" onClick={() => onQty(i.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 p-5">
          <div className="mb-[14px] flex justify-between text-[1.1rem]"><span>Total</span><strong>${total}</strong></div>
          <button
            className="w-full rounded-full bg-emerald-950 px-6 py-3 font-bold text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-50"
            disabled={!items.length}
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      </aside>
    </>
  );
}
