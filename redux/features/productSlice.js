const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    sortValue: '',
    categories: [],
    searchValue: '',
    searchProducts: [],
    priceValue: [0, 5000]
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

        setSortValue: (state, action) => {
            // state.sortValue = action.payload;
            let newState = { ...state, sortValue: action.payload };
            state = newState
            console.log(newState);
        },

        setCategories: (state, action) => {
            let isExists = state.categories.find(category => category === action.payload);
            if (isExists) {
                state.categories = state.categories.filter(category => category !== action.payload);
            } else {
                state.categories.push(action.payload)
            }
        },
        setPriceValue: (state, action) => {
            state.priceValue = action.payload;
        }
    }
});

export const {
    setSortValue,
    setPriceValue,
    addToWishList,
    setCategories,
    setSearchValue,
    setSearchProducts,
} = productSlice.actions;

export default productSlice.reducer;