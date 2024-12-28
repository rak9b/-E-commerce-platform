import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Context for cart state management
import { getProducts } from "./services/api"; // Function to fetch products
import { formatCurrency } from "./utils/helpers"; // Helper function for formatting prices
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import ProductGrid from "./components/Products/ProductGrid";
import ShoppingCart from "./components/Cart/ShoppingCart";
import ProductDetails from "./components/Products/ProductDetails"; // Assumed component for individual product details page

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products when the component mounts
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          {/* Header Component */}
          <Header />
          
          <main className="flex-grow">
            <Routes>
              {/* Home route showing products */}
              <Route
                path="/"
                element={<ProductGrid products={products} />}
              />
              
              {/* Route for individual product details */}
              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />

              {/* Shopping Cart route */}
              <Route
                path="/cart"
                element={<ShoppingCart />}
              />
            </Routes>
          </main>
          
          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
