import {createSlice , configureStore} from '@reduxjs/toolkit'
import Logout from '../pages/Logout'

const authSlice = createSlice({
    name : "auth",
    initialState:{
        isLogin : false
    },
    reducers:{
        login(state){
            state.isLogin = true
        },
        Logout(state){
            state.isLogin = false
        }
    }
})

export const authActions = authSlice.actions

export const store = configureStore({
    reducer: authSlice.reducer,
})