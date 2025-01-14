import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMentorShip, addStudent, setFacultyList, setLearningModel, setNinjaSpotLight, setProjects, setStuckList, setTestimonials, setTrustedLearners } from "../utils/studentSlice";
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
    //console.log(responsedata.data.home_data);
    dispatch(setNinjaSpotLight(responsedata.data.home_data.pr_section));
    dispatch(setFacultyList(responsedata.data.home_data.faculty_section));
    dispatch(setProjects(responsedata.data.home_data.projects));
    dispatch(addMentorShip(responsedata.data.home_data.mentorship_sessions));
    dispatch(setStuckList(responsedata.data.home_data.always_available_section));
    dispatch(setLearningModel(responsedata.data.home_data.learning_model));
    dispatch(setTrustedLearners(responsedata.data.home_data.ratings_section));
    dispatch(setTestimonials(responsedata.data.home_data.student_testimonials.categories));
    dispatch(addStudent(responsedata.data.home_data.placement_section.students));
  }
}


export default useStudentData;