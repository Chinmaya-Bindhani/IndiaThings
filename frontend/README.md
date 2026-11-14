# ShopCart – React Electronics Store

The UI is styled with Tailwind CSS.

Sample catalog data lives in `src/data.js` and is passed into the UI from `src/App.jsx`, so a future API can replace the mock source without coupling product components to it. Deals, new arrivals, categories, search, product details, cart, guest account, delivery information, and demo checkout are available in the storefront. Checkout is local-only; there is no payment or account backend yet.

    npm install
    npm run dev      # http://localhost:5173
    npm run build    # production build
