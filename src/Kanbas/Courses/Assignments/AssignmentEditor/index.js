import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { faCircleCheck, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);


  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="d-flex" style={{fontFamily: "calibri", marginRight:"20px"}}>

    <form class="row">

    <div className="float-end">
        <button className="btn btn-light float-end"><FontAwesomeIcon icon={faEllipsisVertical}/></button>
        <a className="float-end" style={{color: "green", marginLeft: "5px", textDecoration:"none"}}> Published </a>
        <FontAwesomeIcon  className="float-end" icon={faCircleCheck} style={{color:"green", marginBottom:"10px"}}/>
        <br/><hr/>
    </div>

    <br/><br/>
    <label className="form-label" for="it">Assignment Name</label><br/>
    <input value={assignment.title}
                className="form-control mb-2" id="it" type="text"
                style={{width:"100%"}}/>
    <br /> <br />

    <textarea cols="25" rows="5" style={{width: "100%"}} className="form-control">This is the assignment description.
    </textarea>
    <br /> <br />

    <div style={{width: "100%"}}>
    <div className="row" style={{width: "75%", marginLeft: "12%"}}>
        <div className="col-sm-3" style={{textAlign: "right"}}>
            <label for="points" className="col-form-label">Points</label> <br/><br/>
            <label for="assG" className="col-form-label">Assignment Group</label> <br/>
            <label for="disG" className="col-form-label">Display Grade as</label> <br/><br/><br/>
            <label for="subT" className="col-form-label">Submission Type</label> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <label for="aT" className="col-form-label">Assign</label> <br/>
        </div>
        <div className="col-sm-7" style={{textAlign: "left"}}>
            <input className="form-control" id="points" type="number" min="0" max="100" value="100"/> <br/>
            <select className="form-select form-control" id="assG">
                <option selected>ASSIGNMENTS</option>
            </select> <br/>
            <select className="form-select form-control" id="disG">
                <option selected>Percentage</option>
            </select>
            <label className="form-label"><input type="checkbox" class="form-check-input"/>Do not count this assignment towards the final grade</label> <br/>
            <div className="list-group">
                <div className="list-group-item">
                    <select className="form-select form-control" id="subT">
                        <option selected>Online</option>
                    </select>
                    <label className="form-label" style={{fontWeight: "bold"}}>Online Entry Options</label> <br/>
                    <label className="form-label"><input type="checkbox" name="entry" class="form-check-input"/>Text Entry</label> <br/>
                    <label className="form-label"><input type="checkbox" name="entry" class="form-check-input"/>Website URL</label> <br/>
                    <label className="form-label"><input type="checkbox" name="entry" class="form-check-input"/>Media Recordings</label> <br/>
                    <label className="form-label"><input type="checkbox" name="entry" class="form-check-input"/>Student Annotation</label> <br/>
                    <label className="form-label"><input type="checkbox" name="entry" class="form-check-input"/>File Uploads</label> <br/>
                </div>
            </div>
            <br/>

            <div className="list-group">
            <div className="list-group-item">
            <label className="form-label">Assign to</label>
            <input className="form-control" id="aT" type="text" value="Everyone"/>
            <br/>
            <label className="form-label" for="due">Due</label>
            <br />
            <input className="form-control" id="due" type="date" value="2021-01-01"/>
            <br/>
            <div className="row">
            <div className="col-sm-6" style={{textAlign: "left"}}>
                <label className="col-form-label"for="av">Available from</label>
                <br />
                <input className="form-control" id="av" type="date" value="2021-01-01"/>
                <br/>
            </div>
            <div className="col-sm-6" style={{textAlign: "left"}}>
                <label className="col-form-label" for="until">Until</label>
                <br />
                <input className="form-control" id="until" type="date"/>
                <br/>
            </div>
            </div>
            </div>
            <div className="row list-group-item">
                <button className="btn btn-light" disabled><i class="fa-regular fa-plus"></i>Add</button>
            </div>
            </div>
            </div>
    </div>
        <br/><hr/>
        <div className="float-end">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger">
            Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
            Save
        </button>
        </div>
        <label class="form-label"><input type="checkbox" class="form-check-input" style={{marginRight:"5px"}}/>Notify users that this content has changed</label> <br/>
        <br/><hr/>
    <br/> <br/>
    </div>
    </form>
    </div>
  );
}


export default AssignmentEditor;