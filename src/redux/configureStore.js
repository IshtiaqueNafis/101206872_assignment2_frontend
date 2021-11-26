import {configureStore} from '@reduxjs/toolkit'
import counterReducer from "./counterSlice";
import employeeReducer from "./employeeSlice";
import modalReducer from "./modalSlice";
import authReducer from "./authSliceReducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        employee: employeeReducer,
        modal: modalReducer,
        auth: authReducer
    }
})