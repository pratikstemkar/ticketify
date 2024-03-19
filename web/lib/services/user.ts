import { API_BASE_URL } from "@/constants";
import { RootState } from "../store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface ProfileResponse {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
    role: string;
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_BASE_URL}/users`,
        prepareHeaders: (headers, { getState }) => {
            const access_token = (getState() as RootState).auth.access_token;
            if (access_token) {
                headers.set("Authorization", `Bearer ${access_token}`);
            }
            return headers;
        },
    }),
    endpoints: builder => ({
        getProfile: builder.query<ProfileResponse, string>({
            query: () => ``,
        }),
    }),
});

export const { useLazyGetProfileQuery } = userApi;
