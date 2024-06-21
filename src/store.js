import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice';


const store  = configureStore({
    reducer:{
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true
})

export default store;