import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {asyncActionError, asyncActionFinish, asyncActionStart} from "./asyncSliceReducer";

const initialState = {
    employees: [],
    selectedEmployee: [],
        count:0,
    status: null,
    error: null

}

//region ***get loadEmployees get all employees***
export const loadEmployees = createAsyncThunk(
    'employee/loaddata',
    async (params, {dispatch}) => {
        dispatch(asyncActionStart());
        try {
            const result = await axios.get('https://secure-gorge-84686.herokuapp.com/employees').then(response => response);
            dispatch(asyncActionFinish());
            return result.data;
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
            const getSingleEmployee = await axios.get(`https://secure-gorge-84686.herokuapp.com/employees/${id}`).then(response => response);
            dispatch(asyncActionFinish());
            const {data} = getSingleEmployee.data;

            return data;


        } catch (error) {

            dispatch(asyncActionError(error));
        }
    }
)
//endregion

export const deletingEmployee = createAsyncThunk(
    'employee/deleteEmployee',
    async ({modalProps}, {dispatch}) => {

        dispatch(asyncActionStart());
        try {
            const deeleteEmployee = await axios.delete(`https://secure-gorge-84686.herokuapp.com/employees/${modalProps}`).then(response => response);
            dispatch(asyncActionFinish());
            return deeleteEmployee;
        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)
export const addEmployee = createAsyncThunk(
    'employee/AddEmployees',
    async ({...values}, {dispatch}) => {

        dispatch(asyncActionStart());
        try {
            const employee = await axios.post(`https://secure-gorge-84686.herokuapp.com/employees`, {...values}).then(res => res.request(values));
            const {data} = employee.data;
            dispatch(asyncActionFinish());
            return data;
        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
);

export const updateEmployee = createAsyncThunk(
    'employee/EditEmployees',
    async ({ ...values}, {dispatch}) => {
        const {_id} = values;
        try {
            const employee = await axios.put(`https://secure-gorge-84686.herokuapp.com/employees/${_id}`, {...values}).then(res => res.request(values));
            const {data} = employee.data;
            dispatch(asyncActionFinish());
            return data;
        }catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)


export const employeeSliceReducer = createSlice({
    name: 'employee',
    initialState,

    extraReducers: {

        [loadEmployees.fulfilled]: (state, action) => {
            state.count = action.payload.count;

            state.employees = action.payload.data;
        },
        [getSingleEmployee.fulfilled]: (state, action) => {
            state.selectedEmployee = action.payload;

        },
        [deletingEmployee.fulfilled]: (state, action) => {
            console.log(action.payload);
        },
        [addEmployee.fulfilled]: (state, action) => {
            console.log(action.payload);
        }


    }


})


export default employeeSliceReducer.reducer;