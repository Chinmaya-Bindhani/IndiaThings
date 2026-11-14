import { useState } from "react";

const colors = [
  { name: "Coral", className: "bg-[#ed5c55]" },
  { name: "Midnight", className: "bg-[#33383b]" },
  { name: "Sage", className: "bg-[#b8c8b7]" },
  { name: "Silver", className: "bg-[#d9dadd]" },
  { name: "Blue", className: "bg-[#294d67]" },
];

export default function ProductDetail({ product, onBack, onAdd, onBuyNow, onDelivery }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Sage");
  const image = product.image;
  const hasGalleryImage = Boolean(image);

  return (
    <section className="mx-auto max-w-[1080px] px-4 pb-16 pt-6 sm:px-8">
      <nav aria-label="Breadcrumb" className="mb-7 flex flex-wrap items-center gap-2 text-xs text-slate-500 sm:text-sm">
        <button className="hover:text-emerald-900" onClick={onBack}>Electronics</button>
        <span>/</span><span>{product.category}</span><span>/</span>
        <span className="font-semibold text-slate-800">{product.name.toLowerCase().replaceAll(" ", "-")}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="mx-auto grid aspect-square w-full max-w-[500px] place-items-center overflow-hidden rounded-xl bg-[#f5f6f5] lg:mx-0">
            {hasGalleryImage ? (
              <img src={image} alt={product.name} className="h-full w-full object-cover mix-blend-multiply" />
            ) : (
              <span aria-hidden="true" className="text-[9rem]">{product.icon}</span>
            )}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {colors.slice(0, 4).map((color, index) => (
              <button
                key={color.name}
                aria-label={`${color.name} product image`}
                onClick={() => setSelectedColor(color.name)}
                className={`grid aspect-square place-items-center overflow-hidden rounded-lg border-2 bg-slate-50 p-2 ${selectedColor === color.name ? "border-emerald-800" : "border-transparent"}`}
              >
                {hasGalleryImage ? (
                  <img
                    src={image}
                    alt=""
                    className={`h-full w-full object-cover mix-blend-multiply ${index === 1 ? "grayscale" : index === 2 ? "hue-rotate-60" : index === 3 ? "opacity-60" : ""}`}
                  />
                ) : <span className="text-4xl">{product.icon}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="pt-1">
          <p className="mb-2 text-sm text-slate-500">{product.category} <span className="px-1">/</span> Shopcart select</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">{product.name}</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">{product.description || `Enjoy premium ${product.category.toLowerCase()} with thoughtful design, reliable performance, and quality you can hear.`}</p>
          <p className="mt-3 flex items-center gap-2 text-sm"><span className="tracking-wide text-green-600">★★★★★</span><span className="text-slate-600">({product.rating})</span></p>

          <div className="my-5 border-y border-slate-200 py-5">
            <p className="text-2xl font-bold text-slate-950">${product.price.toFixed(2)} <span className="text-lg font-medium">or ${(product.monthlyPrice || product.price / 6).toFixed(2)}/month</span></p>
            <p className="mt-1 text-xs text-slate-500">Suggested payments with 6 months special financing</p>
          </div>

          <div className="border-b border-slate-200 pb-5">
            <h2 className="text-sm font-semibold text-slate-800">Choose a Color <span className="font-normal text-slate-500">· {selectedColor}</span></h2>
            <div className="mt-4 flex gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  aria-label={color.name}
                  aria-pressed={selectedColor === color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`h-7 w-7 rounded-full border-2 ${color.className} ${selectedColor === color.name ? "border-white ring-2 ring-emerald-800 ring-offset-2" : "border-white"}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 py-5">
            <div className="flex h-10 items-center gap-5 rounded-full bg-slate-100 px-4">
              <button aria-label="Decrease quantity" className="text-lg text-slate-700" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button>
              <span className="min-w-3 text-center text-sm font-semibold text-emerald-950">{quantity}</span>
              <button aria-label="Increase quantity" className="text-lg text-slate-700" onClick={() => setQuantity((value) => value + 1)}>+</button>
            </div>
            <p className="text-xs leading-5 text-slate-600">Only <strong className="text-orange-600">12 items left!</strong><br />Don&apos;t miss it</p>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button className="rounded-full bg-emerald-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800" onClick={() => onBuyNow(product.id, quantity)}>Buy Now</button>
            <button className="rounded-full border border-emerald-900 px-5 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50" onClick={() => onAdd(product.id, quantity)}>Add to Cart</button>
          </div>

          <div id="delivery" className="mt-5 divide-y divide-slate-200 rounded-md border border-slate-200">
            <div className="p-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-800"><span className="text-orange-500">▱</span>Free Delivery</h2>
              <button className="ml-6 mt-1 text-left text-xs text-slate-600 underline underline-offset-2" onClick={onDelivery}>Delivery availability and details</button>
            </div>
            <div className="p-4">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-slate-800"><span className="text-orange-500">▣</span>Return Delivery</h2>
              <p className="ml-6 mt-1 text-xs text-slate-600">Free 30-day delivery returns. <button className="underline underline-offset-2" onClick={onDelivery}>Details</button></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
