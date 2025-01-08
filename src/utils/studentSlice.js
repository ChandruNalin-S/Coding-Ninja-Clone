import { createSlice } from "@reduxjs/toolkit";



const studentSlice = createSlice({
  name:"student",
  initialState:{
    studentList:[],
  },
  reducers:{
    addStudent:(state,action)=>{
        state.studentList = action.payload;
    },
  }
});


export const {addStudent} = studentSlice.actions;

export default studentSlice.reducer;