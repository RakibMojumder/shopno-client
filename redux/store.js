import { configureStore } from '@reduxjs/toolkit'
import productApi from './api/productApi';
import authApi from './api/authApi';
import userSlice from './features/userSlice';
import productSlice from './features/productSlice';
import cartSlice from './features/cartSlice';

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        user: userSlice,
        cart: cartSlice,
        product: productSlice
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productApi.middleware, authApi.middleware)
    },
});

export default store;