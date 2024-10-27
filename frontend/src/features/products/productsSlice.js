import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialProductsState } from "./productsDummy";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    return products;
  }
);
const initialState = {
  products: [],
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
