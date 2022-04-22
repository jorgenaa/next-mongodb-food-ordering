import { createSlice } from "@reduxjs/toolkit";

// export interface StateModifiers {
//     openSidebar: () => void
//     closeSidebar: () => void
// }

export interface StateValues {
    isSidebarOpen: boolean
}

// const StateModifiers = {
//     openSidebar: () => {},
//     closeSidebar: () => {}
// }

const initialState: StateValues = {
    isSidebarOpen: false
}

const cartSidebarSlice = createSlice({
    name: "cartSidebar",
    initialState: initialState,
    reducers: {
        openSidebar: (state, action) => {
            return{
                ...state, 
                isSidebarOpen: action.payload = true
            } 
      },
        closeSidebar: (state, action) => {
            return{
                ...state, 
                isSidebarOpen: action.payload = false
            }  
      },
    }
  });


export const { openSidebar, closeSidebar } = cartSidebarSlice.actions; 
export default cartSidebarSlice.reducer;