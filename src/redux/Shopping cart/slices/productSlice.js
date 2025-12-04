import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch",async() => {
    const res = await axios.get("https://dummyjson.com/products?limit=6");
    return res.data.products;
});

const productSlice = createSlice({
   name: "products",
   initialState:{loading: false,items :[], error: null },
   reducers: {},

   extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
        state.loading = false;
        state.items = action.payload;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
   })
   .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.items = action.payload;
})
   }
});
export default productSlice.reducer;