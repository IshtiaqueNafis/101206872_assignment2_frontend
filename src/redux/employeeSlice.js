import { createSlice } from '@reduxjs/toolkit'
import {data} from "../services/fakeData";

const initialState = {
    employees: []
}
export const employeeSlice = createSlice({
    name:'employee',
    initialState,
    reducers:{
        loadData:state=>{
            state.employees = [...data];
        }
    }
})

export const {loadData} = employeeSlice.actions;

export default employeeSlice.reducer;