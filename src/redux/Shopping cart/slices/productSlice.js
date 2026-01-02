import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetch",async() => {
    const res = await axios.get("https://dummyjson.com/products?limit=6");
    console.log(res)
    return res.data.products;
});

const productSlice = createSlice({
   name: "products",
   initialState:{loading: false,items :[], error: null },
   reducers: {},

   extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state,action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
   })
   .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = res.data.error;
})
   }
});
export default productSlice.reducer;