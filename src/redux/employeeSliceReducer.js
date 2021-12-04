import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {asyncActionError, asyncActionFinish, asyncActionStart} from "./asyncSliceReducer";
import EmployeeService from "../services/EmployeeService";


//region ***get loadEmployees get all employees***
export const loadEmployees = createAsyncThunk(
    'employee/retrieveEmployees',
    async (_, {dispatch}) => {
        dispatch(asyncActionStart());
        try {
            const res = await EmployeeService.getAllEmployee();
            dispatch(asyncActionFinish());
            return res.data.data;
        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)
//endregion

//region ***getSingleEmployee*** --> get the details for the employee
export const getSingleEmployee = createAsyncThunk(
    'employee/getSingleEmployee',
    async ({id}, {dispatch}) => {

        dispatch(asyncActionStart());
        try {
            const res = await EmployeeService.getSingleEmployee(id);
            dispatch(asyncActionFinish());
            return res.data.data;


        } catch (error) {

            dispatch(asyncActionError(error));
        }
    }
)
//endregion

export const deletingEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async ({modalProps: id}, {dispatch}) => {

        dispatch(asyncActionStart());
        try {

            await EmployeeService.removeEmployee(id);
            dispatch(asyncActionFinish());
            return {id};
        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)
export const addEmployee = createAsyncThunk(
    'employee/AddEmployee',
    async ({...values}, {dispatch}) => {

        dispatch(asyncActionStart());
        try {

            const res = await EmployeeService.createEmployee(values)
            dispatch(asyncActionFinish());
            return res.data.data;


        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
);

export const updateEmployee = createAsyncThunk(
    'employee/EditEmployees',
    async ({...values}, {dispatch}) => {
        const {_id: id} = values;
        console.log(id);
        dispatch(asyncActionStart());
        try {
            const res = await EmployeeService.updateEmployee(id, values);
            dispatch(asyncActionFinish());
            return res.data.data;

        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)


export const employeeSliceReducer = createSlice({
    name: 'employee',
    initialState: {
        employees: [],
        selectedEmployee: null

    },
    reducers: {},

    extraReducers: {
        [loadEmployees.fulfilled]: (state, {payload}) => {
            state.employees = [];
            state.employees.push(...payload);
        },
        [deletingEmployee.fulfilled]: (state, {payload}) => {
            let index = state.employees.findIndex(employee => employee._id === payload.id);
            state.employees.splice(index, 1);
        },
        [addEmployee.fulfilled]: (state, {payload}) => {
            state.employees.push(payload);
        },
        [updateEmployee.fulfilled]: (state, {payload}) => {

            const index = state.employees.findIndex(employee => employee._id === payload._id);

            state.employees[index] = {

                ...payload
            };
        },
        [getSingleEmployee.fulfilled]: (state, {payload}) => {
            state.selectedEmployee = payload
        }

    }


});


export default employeeSliceReducer.reducer;