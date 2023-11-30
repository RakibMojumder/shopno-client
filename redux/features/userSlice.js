import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    showAuthModal: false,
    wishList: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },

        setShowAuthModal: (state, action) => {
            state.showAuthModal = action.payload
        },

        // setWishList: (state, action) => {
        //     state.wishList = action.payload
        // },

        // addWishList: (state, action) => {
        //     const productId = action.payload.id;
        //     const isExist = state.wishList.findIndex(product => product._id === productId);

        //     if (isExist) {
        //         state.wishList.splice(isExist, 1)
        //     } else {
        //         state.wishList.push(productId);
        //     }
        // }
    }
});


export const { setUser, setShowAuthModal } = userSlice.actions;
export default userSlice.reducer;