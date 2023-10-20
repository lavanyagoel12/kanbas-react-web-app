import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsisVertical, faPenToSquare, faPlus } from "@fortawesome/free-solid-svg-icons";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="col-12" style={{fontFamily:"calibri"}}>
    <br/>
    <div className="flex-row">
    <div className="float-end">
    <button className="btn btn-light"><FontAwesomeIcon icon={faPlus} style={{marginRight: "5px"}}/>Group</button>
    <button className="btn btn-danger"><FontAwesomeIcon icon={faPlus} style={{marginRight: "5px"}}/>Assignment</button>
    <button className="btn btn-light"><FontAwesomeIcon icon={faEllipsisVertical}/></button>
    </div>

    <input className="form-control w-25" type="text" placeholder="Search for Assignment"/>
    <hr/>
    </div>
      <div className="row" style={{marginTop: "50px", marginLeft: "20px"}}>  
      </div>
      <div className="list-group">
        <ul>
        <li className="list-group-item list-group-item-secondary">
            <FontAwesomeIcon icon={faEllipsisVertical} style={{color:"gray"}}/>
            <FontAwesomeIcon icon={faEllipsisVertical} style={{color:"gray", marginRight:"5px"}}/>
            Assignments for course {courseId}
            <FontAwesomeIcon icon={faEllipsisVertical} className="float-end"/>
            <FontAwesomeIcon icon={faPlus} className="float-end" style={{marginLeft: "10px", marginRight:"10px"}}/>
            <button className="btn-secondary rounded float-end">40% of Total</button>
            </li>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
            style={{borderLeft: "5px solid green"}}>
                <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "gray"}}/>
                <FontAwesomeIcon icon={faEllipsisVertical} style={{color:"gray", marginRight:"5px"}}/>
                <FontAwesomeIcon icon={faPenToSquare} style={{color:"green", marginRight:"5px"}}/>
            {assignment.title}
            <FontAwesomeIcon icon={faEllipsisVertical} className="float-end" style={{color:"gray", marginLeft:"5px"}}/>
            <FontAwesomeIcon icon={faCircleCheck} className="float-end" style={{marginBottom: "10px", color:"green"}}/>
            <br/><a style={{color:"gray", fontSize:"13px", marginLeft:"25px"}}>Due Sep 11 at 11:45am | 100pts
            </a>
          </Link>
        ))}
        </ul>
      </div>
    </div>
  );
}
export default Assignments;