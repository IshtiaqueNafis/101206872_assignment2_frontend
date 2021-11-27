import {createSlice} from '@reduxjs/toolkit'
import {data} from "../services/fakeData";

const initialState = {
    employees: data
}
export const employeeSlice = createSlice({
    name: 'employee',
    initialState,
    reducers: {
        loadData: state => {
            state.employees = [...data];
        },
        updateEmployee: (state, action) => {
            const {payload} = action;
            const elementIndex = state.employees.findIndex(e => e._id === payload._id)
            state.employees[elementIndex] = payload
        },
        addEmployee: (state, action) => {
            state.employees.push(action.payload);

        },
        deleteEmployee: (state, action) => {
            state.employees = state.employees.filter(s => s._id !== action.payload);
            return state

        }
    }


})

export const {loadData, updateEmployee, addEmployee, deleteEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;