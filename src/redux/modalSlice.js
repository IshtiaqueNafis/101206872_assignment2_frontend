import {createSlice} from '@reduxjs/toolkit'

const initialState = null
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            const {modalType, modalProps} = action.payload
            state = {modalType, modalProps}
            return state

        },
        closeModal: (state) => {
            state = null
            return state;
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;

