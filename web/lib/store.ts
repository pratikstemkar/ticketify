import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { authApi } from "./services/auth";
import { userApi } from "./services/user";

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            [authApi.reducerPath]: authApi.reducer,
            [userApi.reducerPath]: userApi.reducer,
        },
        middleware: getDefaultMidlleware =>
            getDefaultMidlleware()
                .concat(authApi.middleware)
                .concat(userApi.middleware),
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
