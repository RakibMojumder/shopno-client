import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
    }),
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => `/product/${id}`
        })
        ,
        getProducts: builder.query({
            query: () => '/product',
        }),

        getProductsByCategory: builder.query({
            query: (category) => `/product?category=${category}`
        }),
    })
});


export const { useGetProductQuery, useGetProductsQuery, useGetProductsByCategoryQuery } = productApi;
export default productApi;