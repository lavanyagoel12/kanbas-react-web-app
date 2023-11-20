import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import db from "../../Kanbas/Database";
import { useParams, useLocation } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {Navigate, Route, Routes} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import axios from "axios";
import {useState, useEffect} from "react";

function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/api/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  return (
    <div className="d-flex" style={{fontFamily: "calibri", marginTop: "10px"}}>
        <div>
        <ul className="breadcrumb">
            <FontAwesomeIcon icon={faBars} style={{paddingRight: "5px", paddingTop: "5px", color:"red"}}/>
            <li className="breadcrumb-item" style={{color: "red", textDecoration: "none"}}>
                {course.name}
            </li>
            <li class="breadcrumb-item active" style={{color: "black", textDecoration: "none"}}>
                {pathname.split("/").at(-1)}</li>
        </ul>
        <hr />
        <CourseNavigation />
    </div>
    <div style={{fontFamily: "calibri", marginTop: "10px"}}>
          <br/><br/>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
    </div>
    </div>
  );
}
export default Courses;