import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    authenticated: false,
    currentUser: null
}
export const authSliceReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signInUser: (state, {payload}) => {
            state.authenticated = true;
            console.log(payload);
            state.currentUser = {
                email: payload.email

            }
        },

        signOutUser: (state) => {
            state.authenticated = false;
            state.currentUser = null
        }
    }
})
export const {signInUser, signOutUser} = authSliceReducer.actions;
export default authSliceReducer.reducer;