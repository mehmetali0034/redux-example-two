import { createSlice } from "@reduxjs/toolkit";
const courseSlice = createSlice({
    name:"courses",
    initialState:{
        searchTerm:"",
        data:[]
    },
    reducers:{
        addToData(state,action){
            const {name,description,price} = action.payload;
            const yeniOge ={
                name,
                description,
                price,
            }
            const newData = [...state.data,yeniOge]
            state.data = newData;
        },
        deleteFromData(state,action){
            const productName = action.payload;
            const newData = state.data.filter((item)=>item.name !== productName);
            state.data = newData;
        },
        changeSearch(state,action){
            state.searchTerm=action.payload
        }

    }
})

export const courseReducer = courseSlice.reducer
export const {addToData,deleteFromData,changeSearch} =courseSlice.actions