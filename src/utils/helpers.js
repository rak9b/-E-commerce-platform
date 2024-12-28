/**
 * Utility functions for common operations used throughout the application.
 */

// Function to format currency (e.g., "$25.00")
export const formatCurrency = (amount) => {
  return `$${amount.toFixed(2)}`;
};

/**
 * Function to filter products based on a price range.
 * @param {Array} products - The list of products to filter.
 * @param {Object} priceRange - The price range with min and max values.
 * @returns {Array} - The filtered list of products.
 */
export const filterByPrice = (products, priceRange) => {
  return products.filter(
    (product) =>
      product.price >= priceRange.min && product.price <= priceRange.max
  );
};

/**
 * Function to sort products based on a given criterion.
 * @param {Array} products - The list of products to sort.
 * @param {string} sortBy - The sorting criterion (e.g., "price-low", "price-high", "rating").
 * @returns {Array} - The sorted list of products.
 */
export const sortProducts = (products, sortBy) => {
  switch (sortBy) {
    case "price-low":
      return products.sort((a, b) => a.price - b.price);
    case "price-high":
      return products.sort((a, b) => b.price - a.price);
    case "rating":
      return products.sort((a, b) => b.rating - a.rating);
    default:
      return products;
  }
};

/**
 * Function to calculate the total price of items in the cart.
 * @param {Array} cart - The cart items with their quantities and prices.
 * @returns {number} - The total price of the cart.
 */
export const calculateTotal = (cart) => {
  return cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

/**
 * Function to format a number as a readable rating (e.g., "4.5 stars").
 * @param {number} rating - The product rating.
 * @returns {string} - The formatted rating.
 */
export const formatRating = (rating) => {
  return `${rating.toFixed(1)} stars`;
};

/**
 * Function to capitalize the first letter of each word in a string.
 * @param {string} str - The input string.
 * @returns {string} - The capitalized string.
 */
export const capitalizeWords = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

/**
 * Function to validate email format.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - True if the email is valid, otherwise false.
 */
export const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

/**
 * Function to check if a product is already in the cart.
 * @param {Array} cart - The cart items.
 * @param {string} productId - The product ID to check.
 * @returns {boolean} - True if the product is in the cart, otherwise false.
 */
export const isProductInCart = (cart, productId) => {
  return cart.some((item) => item.id === productId);
};

/**
 * Function to create a unique ID for new items (e.g., orders, reviews).
 * @returns {string} - A unique identifier string.
 */
export const generateUniqueId = () => {
  return "id_" + Math.random().toString(36).substr(2, 9);
};

export default {
  formatCurrency,
  filterByPrice,
  sortProducts,
  calculateTotal,
  formatRating,
  capitalizeWords,
  validateEmail,
  isProductInCart,
  generateUniqueId,
};
