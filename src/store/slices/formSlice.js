import { createSlice } from "@reduxjs/toolkit";
import { addToData } from "./courseSlice";

const formSlice = createSlice({
    name:"form",
    initialState:{
        name : "",
        description:"",
        price:0
    },
    reducers:{
        changeName (state,action){
            state.name = action.payload;
        },
        changeDescription(state,action){
            state.description =action.payload;
        },
        changePrice(state,action){
            state.price=action.payload;
        }
    },
    extraReducers(builder){
        //Bu şekilde addToData işleminden sonra name,description ve price alanları boşaltma güncellemesi yaptım.
        //addCase'in ilk parametresinin addToData olması bu işlemin addToData fonksiyonu çalıştıktan sonra olacağı anlamına gelir.
        builder.addCase(addToData,(state,action)=>{
            state.name ="";
            state.description="";
            state.price=0;
        })
    }
})
export const formReducer = formSlice.reducer;
export const {changeName,changeDescription,changePrice} = formSlice.actions;