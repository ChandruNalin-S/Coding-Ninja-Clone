import { configureStore } from "@reduxjs/toolkit";
import guideVideo from './videoSlice';
import placedStudent from './studentSlice';


const appStore = configureStore({
  reducer:{
    video: guideVideo,
    student:placedStudent,
  }
});


export default appStore;