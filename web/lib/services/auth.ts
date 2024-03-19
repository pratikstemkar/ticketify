import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { User } from "../features/authSlice";
import { API_BASE_URL } from "@/constants";

export interface UserResponse {
    user: User;
    access_token: string;
    refresh_token: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    firstName: string;
    lastName: string;
    email: string;
}

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/auth`,
        prepareHeaders: (headers, { getState }) => {
            const access_token = (getState() as RootState).auth.access_token;
            if (access_token) {
                headers.set("Authorization", `Bearer ${access_token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        login: builder.mutation<UserResponse, LoginRequest>({
            query: credentials => ({
                url: "/authenticate",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: credentials => ({
                url: "/register",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
