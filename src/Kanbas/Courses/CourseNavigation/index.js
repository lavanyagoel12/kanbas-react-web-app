import { Link, useParams, useLocation } from "react-router-dom";
import '../../KanbasNavigation/index.css';

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom_Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto_Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div className="list-group col-12 text-wrap" style={{ width: 150, fontFamily: "calibri", marginLeft: "0px", paddingLeft: "0px"}}>
      <ul className="wd-course-navigation list-group">
        {links.map((link, index) => (
            <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
            style={{borderColor: "white"}}>
            <li className="sololia">
                {link}
            </li>
            </Link>
        ))}
      </ul>
    </div>
  );
}


export default CourseNavigation;