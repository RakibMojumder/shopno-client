import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Cookies from 'js-cookie';

const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/user`,
        // headers: {
        //     authorization: `Bearer ${Cookies.get('token')}`
        // },
    }),
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getLoginUser: builder.query({
            query: () => ({
                url: '/get-login-user',
                headers: {
                    authorization: `Bearer ${Cookies.get('token')}`
                },
            }),
            providesTags: ['User']
        }),

        registerUser: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body
            })
        }),

        loginUser: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            }),
            invalidatesTags: ['User']
        }),

        addToWishList: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${Cookies.get('token')}`
                }
            }),
            invalidatesTags: ['User']
        }),
    })
});

export const { useGetLoginUserQuery, useRegisterUserMutation, useLoginUserMutation, useAddToWishListMutation } = authApi;

export default authApi;

