import { Link } from "react-router-dom";
import db from "../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import './index.css';
import { useState, React } from "react";

function Dashboard({courses, course, setCourse, addNewCourse, deleteCourse, updateCourse}) {
  // const colors = ["blue", "purple", "goldenrod", "palevioletred", "green", "lightgreen", "lightsalmon"];
  return (
    <div style={{fontFamily: "calibri"}}>
      <h1>Dashboard</h1>
      <h5>Published Courses (7)</h5>
        <hr style={{marginBottom: "30px"}}></hr>
        <h5>Course</h5>
        <div className="d-flex">
        <input value={course.name} className="form-control w-25" type="text"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control w-25" type="text"
        onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control w-25" type="date" 
        onChange={(e) => setCourse({ ...course, startDate: e.target.value }) } />
        <input value={course.endDate} className="form-control w-25" type="date" 
        onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
        </div>
        <button onClick={updateCourse} className="btn btn-warning mb-2 mt-2"
        style={{marginRight:"5px"}}>
          Update
        </button>
        <button onClick={addNewCourse} className="btn btn-danger mb-2 mt-2">
          Add
        </button>
      <div className="list-group d-flex flex-row flex-wrap">
        {courses.map((courseA) => (
          <Link key={courseA._id} to={`/Kanbas/Courses/${courseA._id}`} className="list-group-item card-div card h-250"
          style={{textDecoration: "none", color: "black", padding: "0px"}}>
            <div className="icon-div" style={{backgroundColor: "gray"}}>
                <FontAwesomeIcon icon={faEllipsisVertical} className="float-end dots"/>
            </div>
            <h6 className="card-heading" style={{color: "gray"}}>{courseA.name}</h6>
            <div class="card-body">
                <h5 class="card-title" id="title">{courseA.number}</h5>
                <p class="card-text override-ct">
                    {courseA.startDate} to {courseA.endDate}
                </p>
                <FontAwesomeIcon icon={faPenToSquare} />
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(courseA._id);
                  }} className="btn btn-danger float-end">
                  Delete
                </button>
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(courseA);
                  }} className="btn btn-warning float-end"
                  style={{marginRight:"5px"}}>
                  Edit
                </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Dashboard;