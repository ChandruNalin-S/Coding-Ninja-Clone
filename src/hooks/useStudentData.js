import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "../utils/studentSlice";
import { CODING_NINJA_API } from "../utils/constants";


const useStudentData = ()=>{

  const students = useSelector((store)=>store.student.studentList);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!students || students.length === 0) {
      fetchData();
    }
  }, [students]); //


  const fetchData = async ()=>{
    const response = await fetch(CODING_NINJA_API);
    const responsedata = await response.json();
    //console.log(responsedata.data.home_data.placement_section.students);
    dispatch(addStudent(responsedata.data.home_data.placement_section.students))
  }
}


export default useStudentData;