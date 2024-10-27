import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialProductsState } from "./productsDummy";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    const products = data.products;
    localStorage.setItem("products", JSON.stringify(products));
    localStorage.setItem("products_timestamp", Date.now());
    console.log(products);
    return products;
  }
);

const CACHE_EXPIRATION_TIME = 86400000;
const initialState = {
  products: JSON.parse(localStorage.getItem("products")) || [],
  status: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products;
export default productsSlice.reducer;
console.log(initialProductsState);
