import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";
import employeeReducer from "./employeeSliceReducer";
import modalReducer from "./modalSlice";
import authReducer from "./authSliceReducer";
import asyncReducer from "./asyncSliceReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        employee: employeeReducer,
        modal: modalReducer,
        auth: authReducer,
        async: asyncReducer

    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

})

