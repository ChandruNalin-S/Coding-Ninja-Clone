import { createSlice } from "@reduxjs/toolkit";



const studentSlice = createSlice({
  name:"student",
  initialState:{
    studentList:[],
    student_testimonials:[],
    trusted_learners:[],
    Learning_model:[],
    stuckList:[],
    mentorShip:[],
    Projects:[],
  },
  reducers:{
    addStudent:(state,action)=>{
        state.studentList = action.payload;
    },

    setTestimonials:(state,action)=>{
      state.student_testimonials = action.payload;
    },

    setTrustedLearners:(state,action)=>{
      state.trusted_learners = action.payload;
    },
    setLearningModel:(state,action)=>{
      state.Learning_model = action.payload;
    },
    
    setStuckList:(state,action)=>{
      state.stuckList = action.payload;
    },

    addMentorShip:(state,action)=>{
      state.mentorShip = action.payload;
    },

    setProjects:(state,action)=>{
      state.Projects = action.payload;
    }
  }
});


export const {addStudent, setTestimonials , setTrustedLearners, setLearningModel, setStuckList, addMentorShip, setProjects} = studentSlice.actions;

export default studentSlice.reducer;