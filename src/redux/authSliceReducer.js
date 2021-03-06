import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authenticated: false,
    currentUser: ''
}
export const authSliceReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, {payload}) => {
            state.authenticated = true;

            state.currentUser = {
                email: payload.email

            }
            return state;
        },

        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = null
            return state;
        }
    }
})
export const {signInUser, signOutUser} = authSliceReducer.actions;
export default authSliceReducer.reducer;