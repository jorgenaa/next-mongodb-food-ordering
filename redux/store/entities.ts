import { combineReducers } from 'redux';
import cartReducer from './cartSlice';
import cartSidebarReducer from './cartSidebarSlice'
import navbarReducer from './navbarSlice';

export default combineReducers({
    cart: cartReducer,
    cartSidebar: cartSidebarReducer,
    navbar: navbarReducer
})


//export type RootState = ReturnType<typeof entitiesReducer>

