import Cookies from "js-cookie";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [],
    showCart: false,
    // totalAmount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.cart.find(product => product._id === action.payload._id);

            if (!findProduct) {
                state.cart.push(action.payload)
                state.showCart = true
            } else {
                findProduct.quantity += 1
                state.cart.filter(product => product._id !== action.payload._id).push(findProduct);
                state.showCart = true
            }

            Cookies.set('cart', JSON.stringify(state.cart));
        },

        removeFromCart: (state, action) => {
            const selectedIndex = state.cart.findIndex(product => product._id === action.payload._id);
            state.cart.splice(selectedIndex, 1);
            Cookies.set('cart', JSON.stringify(state.cart));
        },

        setCart: (state, action) => {
            state.cart = action.payload;
        },

        setShowCart: (state, action) => {
            state.showCart = action.payload
        },

        increaseProduct: (state, action) => {
            const findProduct = state.cart.find(product => product._id === action.payload._id);
            findProduct.quantity += 1;
            state.cart.filter(product => product._id !== findProduct._id).push(findProduct)
            Cookies.set('cart', JSON.stringify(state.cart));
        },

        decreaseProduct: (state, action) => {
            const findProduct = state.cart.find(product => product._id === action.payload._id);
            findProduct.quantity -= 1;
            state.cart.filter(product => product._id !== findProduct._id).push(findProduct)
            Cookies.set('cart', JSON.stringify(state.cart));
        },

        // setTotalAmount: (state, action) => {
        //     const totalAmount = state.cart.reduce(acc,item => acc += (item.price * item.quantity),0);
        //     state.totalAmount = totalAmount;
        //     console.log(totalAmount);
        // }
    }
});

export const { addToCart, setCart, removeFromCart, setShowCart, increaseProduct, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;