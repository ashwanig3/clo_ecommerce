import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const ITEMS_COUNT = 10;

export const getProducts = createAsyncThunk('products/getProducts', async() => {
    const response = await fetch('https://closet-recruiting-api.azurewebsites.net/api/data');
    return response.json();
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        allItems: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getProducts.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.allItems = payload;
            state.visibleItems = payload.slice(0, 10);
        })
        .addCase(getProducts.rejected, (state, { error }) => {
            state.loading = false;
            state.error = error.message;
        })
    }
});

export default homeSlice.reducer;