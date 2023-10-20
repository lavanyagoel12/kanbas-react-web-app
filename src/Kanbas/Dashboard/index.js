import { Link } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import './index.css';

function Dashboard() {
  const courses = db.courses;
  const colors = ["blue", "purple", "goldenrod", "palevioletred", "green", "lightgreen", "lightsalmon"];
  return (
    <div style={{fontFamily: "calibri"}}>
      <h1>Dashboard</h1>
      <h5>Published Courses (7)</h5>
        <hr style={{marginBottom: "30px"}}></hr>
      <div className="list-group d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item card-div card h-250"
          style={{textDecoration: "none", color: "black", padding: "0px"}}>
            <div className="icon-div" style={{backgroundColor: colors.find(a => colors.indexOf(a) === courses.indexOf(course))}}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="float-end dots"/>
            </div>
            <h6 className="card-heading" style={{color: colors.find(a => colors.indexOf(a) === courses.indexOf(course))}}>{course.name}</h6>
            <div class="card-body">
                <h5 class="card-title" id="title">{course.number}</h5>
                <p class="card-text override-ct">
                    {course.startDate} to {course.endDate}
                </p>
                <FontAwesomeIcon icon={faPenToSquare} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;