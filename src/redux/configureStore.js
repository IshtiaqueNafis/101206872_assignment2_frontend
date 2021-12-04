import {configureStore} from '@reduxjs/toolkit'
import employeeReducer from "./employeeSliceReducer";
import modalReducer from "./modalSlice";
import asyncReducer from "./asyncSliceReducer";

export const store = configureStore({
    reducer: {
        employee: employeeReducer,
        modal: modalReducer,
        async: asyncReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})

