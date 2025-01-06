import { createSlice } from "@reduxjs/toolkit";
import { DOUBT_SUPPORT } from "./constants";


const VideoSlice = createSlice({
  name:'video',
  initialState:{
    url:DOUBT_SUPPORT
  },
  reducers:{
    addVideoUrl:(state,action)=>{
      state.url = action.payload;
    }
  }
});



export const {addVideoUrl} =  VideoSlice.actions;

export default VideoSlice.reducer;