import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    error: null
}

export const asyncSliceReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        asyncActionStart: (state) => {
            state.loading = true;
            state.error = null;
            return state;
        },
        asyncActionFinish: (state) => {
            state.loading = false;
            return state;
        },
        asyncActionError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            return state;
        }

    }

})

export const {asyncActionStart, asyncActionFinish, asyncActionError} = asyncSliceReducer.actions;
export default asyncSliceReducer.reducer;