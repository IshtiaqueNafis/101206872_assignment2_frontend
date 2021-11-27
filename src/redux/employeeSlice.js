import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {data} from "../services/fakeData";
import {delay} from "../app/utlis/utlis";
import {fetchSampleData} from "../services/mockAPI";
import {asyncActionError, asyncActionFinish, asyncActionStart} from "./asyncSliceReducer";

const initialState = {
    employees: [],
    status: null,
    error: null

}
export const loadEmployees = createAsyncThunk(
    'employee/addEmployee',
    async (params, {dispatch}) => {
        dispatch(asyncActionStart());
        try {
            await delay(100);
            const result = await fetchSampleData();
            dispatch(asyncActionFinish());
            return result;
        } catch (e) {
            dispatch(asyncActionError(e));
        }
    }
)


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
    },
    extraReducers: {

        [loadEmployees.fulfilled]: (state, action) => {
            state.employees = action.payload;

        },

    }


})

export const {loadData, updateEmployee, addEmployee, deleteEmployee} = employeeSlice.actions;

export default employeeSlice.reducer;