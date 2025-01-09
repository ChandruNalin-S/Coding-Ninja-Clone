import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, setTestimonials } from "../utils/studentSlice";
import { CODING_NINJA_API } from "../utils/constants";


const useStudentData = ()=>{

  const students = useSelector((store)=>store.student.studentList);

  const student_testimonials = useSelector((store)=>store.student.student_testimonials);
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (!students || (students.length === 0 && student_testimonials.length === 0)) {
      fetchData();
    }
  }, [students, student_testimonials.length]);
  


  const fetchData = async ()=>{
    const response = await fetch(CODING_NINJA_API);
    const responsedata = await response.json();
    console.log(responsedata.data.home_data.student_testimonials.categories
    );
    dispatch(setTestimonials(responsedata.data.home_data.student_testimonials.categories));
    dispatch(addStudent(responsedata.data.home_data.placement_section.students))
  }
}


export default useStudentData;