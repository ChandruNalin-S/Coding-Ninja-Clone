import { configureStore } from "@reduxjs/toolkit";
import guideVideo from './videoSlice';


const appStore = configureStore({
  reducer:{
    video: guideVideo,
  }
});


export default appStore;