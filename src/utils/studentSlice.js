import { createSlice } from "@reduxjs/toolkit";



const studentSlice = createSlice({
  name:"student",
  initialState:{
    studentList:[],
    student_testimonials:[],
  },
  reducers:{
    addStudent:(state,action)=>{
        state.studentList = action.payload;
    },

    setTestimonials:(state,action)=>{
      state.student_testimonials = action.payload;
    }
  }
});


export const {addStudent, setTestimonials} = studentSlice.actions;

export default studentSlice.reducer;