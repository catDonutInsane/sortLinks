import {  createSlice } from "@reduxjs/toolkit";

 const initialState = {
    login: false,
    urls : [],
    userName : '',
    accessToken : '',
    order: 'asc_counter'
 }
 
const reducer = createSlice({
    name: 'reducer',
    initialState,
    reducers:{
        setIsLoged(state,action){
            state.login = action.payload
        },
        
        addUserName(state, action){
            state.userName = action.payload
        },
        setAccesssToken(state, action){
            state.accessToken = action.payload
        },
        setUrlsPag(state, action){
            state.urls = action.payload
        },
        setOrder(state, action){
            state.order = action.payload
        },

    }
})
export const {setIsLoged,addUserName,setAccesssToken,setUrlsPag,setOrder} = reducer.actions
export default reducer.reducer