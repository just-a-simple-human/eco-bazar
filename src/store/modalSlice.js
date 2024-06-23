import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({

    name: "modal",

    initialState: {
        modals: {}
    },

    reducers: {
        addModal(state, action) {
            state.modals[action.payload.name] = {
                status: action.payload.status,
                ref: action.payload.ref
            }
        },
        changeModalStatus(state, action) {
            state.modals[action.payload.name].status = action.payload.value
        },
        openModal(state, action) {
            state.modals[action.payload.name].ref.showModal()
        },
        closeModal(state, action) {
            state.modals[action.payload.name].ref.close()
        }
    }

})

export const { addModal, changeModalStatus, openModal, closeModal } = modalSlice.actions
export default modalSlice.reducer