import { useState } from "react";
import { categories, products } from "./data.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductList from "./components/ProductList.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import AccountPage from "./components/AccountPage.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import Cart from "./components/Cart.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState("home");

  const updateCart = (currentCart, id, quantity) => {
    const found = currentCart.some((item) => item.id === id);
    if (found) return currentCart.map((item) => (item.id === id ? { ...item, qty: item.qty + quantity } : item));
    return [...currentCart, { id, qty: quantity }];
  };

  const addToCart = (id, quantity = 1) => {
    setCart((currentCart) => updateCart(currentCart, id, quantity));
    setCartOpen(true);
  };

  const buyNow = (id, quantity = 1) => {
    setCart((currentCart) => updateCart(currentCart, id, quantity));
    setSelectedProduct(null);
    setPage("checkout");
    setCartOpen(false);
  };

  const changeQty = (id, delta) =>
    setCart((currentCart) =>
      currentCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );

  const cartItems = cart.map((item) => ({
    ...products.find((product) => product.id === item.id),
    qty: item.qty,
  }));
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const visibleProducts = page === "deals"
    ? products.filter((product) => product.old > product.price)
    : page === "new"
      ? products.filter((product) => product.isNew)
      : products;

  const navigate = (nextPage) => {
    setPage(nextPage);
    setSelectedProduct(null);
    setSearch("");
    setCartOpen(false);
    if (nextPage !== "home") setSelectedCategory("All");
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    navigate("home");
  };

  const selectProduct = (product) => {
    setSelectedProduct(product);
    setPage("home");
    setSearch("");
  };

  let content;
  if (selectedProduct) {
    content = (
      <ProductDetail
        key={selectedProduct.id}
        product={selectedProduct}
        onBack={() => navigate("home")}
        onAdd={addToCart}
        onBuyNow={buyNow}
        onDelivery={() => navigate("delivery")}
      />
    );
  } else if (["home", "deals", "new"].includes(page)) {
    content = (
      <>
        {page === "home" && <Hero />}
        <ProductList
          products={visibleProducts}
          categories={categories}
          search={search}
          category={selectedCategory}
          onCategoryChange={setSelectedCategory}
          title={page === "deals" ? "Deals & Offers" : page === "new" ? "What's New" : "Featured Products"}
          onAdd={addToCart}
          onSelectProduct={selectProduct}
          onViewAll={() => {
            setSelectedCategory("All");
            navigate("home");
          }}
        />
      </>
    );
  } else if (page === "delivery") {
    content = <DeliveryPage onShop={() => navigate("home")} />;
  } else if (page === "account") {
    content = <AccountPage onShop={() => navigate("home")} onOpenCart={() => setCartOpen(true)} />;
  } else if (page === "checkout") {
    content = (
      <CheckoutPage
        items={cartItems}
        onBack={() => navigate("home")}
        onPlaceOrder={() => {
          setCart([]);
          setPage("orderComplete");
        }}
      />
    );
  } else if (page === "orderComplete") {
    content = (
      <section className="mx-auto max-w-[700px] px-4 py-20 text-center sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">Demo order complete</p>
        <h1 className="mt-3 text-3xl font-bold text-emerald-950">Thank you for trying Shopcart</h1>
        <p className="mt-3 leading-7 text-slate-600">This was a local demo checkout. No payment was processed and no order was sent to a server.</p>
        <button
          className="mt-7 rounded-full bg-emerald-950 px-6 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          onClick={() => navigate("home")}
        >
          Continue shopping
        </button>
      </section>
    );
  }

  return (
    <>
      <Header
        products={products}
        categories={categories}
        search={search}
        setSearch={setSearch}
        onSearch={() => {
          setSelectedProduct(null);
          setSelectedCategory("All");
          setPage("home");
        }}
        count={count}
        openCart={() => setCartOpen(true)}
        onNavigate={navigate}
        onSelectCategory={selectCategory}
        onSelectProduct={selectProduct}
      />
      <main>{content}</main>
      <Footer />
      <Cart
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onCheckout={() => navigate("checkout")}
      />
    </>
  );
}
