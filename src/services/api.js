import axios from "axios";

// Set up the Axios instance for API requests
const api = axios.create({
  baseURL: "https://api.example.com", // Replace with your backend API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch all products
export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw error for further handling
  }
};

// Function to fetch a single product by ID
export const getProductById = async (id) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};

// Function to create a new order
export const createOrder = async (orderData) => {
  try {
    const response = await api.post("/orders", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};

// Function to update the cart (e.g., add/remove items)
export const updateCart = async (cartData) => {
  try {
    const response = await api.put("/cart", cartData);
    return response.data;
  } catch (error) {
    console.error("Error updating cart:", error);
    throw error;
  }
};

// Function to handle user authentication (login/signup)
export const authenticateUser = async (credentials) => {
  try {
    const response = await api.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};

// Function to get a user's orders
export const getUserOrders = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}/orders`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching orders for user ${userId}:`, error);
    throw error;
  }
};

// Function to handle adding product reviews
export const addProductReview = async (productId, reviewData) => {
  try {
    const response = await api.post(`/products/${productId}/reviews`, reviewData);
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

// Function to fetch product categories
export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

export default {
  getProducts,
  getProductById,
  createOrder,
  updateCart,
  authenticateUser,
  getUserOrders,
  addProductReview,
  getCategories,
};
