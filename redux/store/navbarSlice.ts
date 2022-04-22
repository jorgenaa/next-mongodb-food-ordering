import { createSlice } from "@reduxjs/toolkit";

// export interface StateModifiers {
//     openNavbar: () => void
//     closeNavbar: () => void
// }

export interface StateValues {
    isNavbarOpen: boolean
}

// const StateModifiers = {
//     openNavbar: () => {},
//     closeNavbar: () => {}
// }

const initialState: StateValues = {
    isNavbarOpen: false,
}

const navbarSlice = createSlice({
    name: "navbar",
    initialState: initialState,
    reducers: {
        openNavbar: (state, action) => {
            return {
                ...state, 
                isNavbarOpen: action.payload = true
            } 
      },
        closeNavbar: (state, action) => {
            return {
                ...state, 
                isNavbarOpen: action.payload = false
            }  
        },
        toggleNavbar: (state, action) => {
            return {
                ...state,
                isNavbarOpen: !state.isNavbarOpen
            }
        }
    }
  });


export const { openNavbar, closeNavbar, toggleNavbar } = navbarSlice.actions; 
export default navbarSlice.reducer;