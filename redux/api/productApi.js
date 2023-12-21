import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const productApi = createApi({
    reducerPath: 'productsAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
    }),
    tagTypes: ['Product'],
    endpoints: (builder) => ({
        getProduct: builder.query({
            query: (id) => `/product/${id}`,
            providesTags: ['Product']
        })
        ,
        getProducts: builder.query({
            query: () => '/Product',
        }),

        getProductsByCategory: builder.query({
            query: (category) => `/product?category=${category}`
        }),

        addReview: builder.mutation({
            query: (body) => ({
                url: '/review',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Product']
        }),

        getReviews: builder.query({
            query: (productId) => `/review?productId=${productId}`,
            providesTags: ['Product']
        })
    })
});


export const { useGetProductQuery, useGetProductsQuery, useGetProductsByCategoryQuery, useAddReviewMutation, useGetReviewsQuery } = productApi;
export default productApi;