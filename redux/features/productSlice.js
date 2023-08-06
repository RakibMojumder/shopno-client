const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    searchValue: '',
    searchProducts: [],
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },

        setSearchProducts: (state, action) => {
            state.searchProducts = action.payload;
        },
    }
});

export const { setSearchValue, setSearchProducts, addToWishList } = productSlice.actions
export default productSlice.reducer;