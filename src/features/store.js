import {configureStore} from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import productsSlise from "./products/productsSlise";
import {apiSlice} from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlise,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    devTools: true,
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware)
})
