const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
    rating: null,
    sortValue: '',
    categories: [],
    searchValue: '',
    searchProducts: [],
    priceValue: [0, 10000],
    page: 0,
    totalPage: 0,
    showFilter: false,
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
            state.sortValue = action.payload;
        },

        setCategories: (state, action) => {
            state.categories = action.payload;
        },

        addCategories: (state, action) => {
            let isExists = state.categories.find(category => category === action.payload);
            if (isExists) {
                state.categories = state.categories.filter(category => category !== action.payload);
            } else {
                state.categories.push(action.payload)
            }
        },
        setPriceValue: (state, action) => {
            state.priceValue = action.payload;
        },

        setRating: (state, action) => {
            state.rating = action.payload;
        },

        setPage: (state, action) => {
            state.page = action.payload;
        },

        setTotalPage: (state, action) => {
            state.totalPage = action.payload;
        },

        setShowFilter: (state, action) => {
            state.showFilter = action.payload;
        }
    }
});

export const {
    setPage,
    setRating,
    setTotalPage,
    setSortValue,
    setShowFilter,
    setPriceValue,
    addToWishList,
    setCategories,
    addCategories,
    setSearchValue,
    setSearchProducts,
} = productSlice.actions;

export default productSlice.reducer;