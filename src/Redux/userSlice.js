import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        UserName:"Default",
    },
    reducers:{
        updateName:(state,action)=>{
            state.UserName=action.payload;
        }
    }
})

export const {updateName}=userSlice.actions;
export default userSlice.reducer;