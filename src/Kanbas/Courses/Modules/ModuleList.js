import React, {useState} from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <>
    <div className="flex-row float-end" style={{fontFamily: "calibri"}}>
    <div className="float-end">
      <button className="btn btn-light">Collapse All</button>
      <button className="btn btn-light">View Progress</button>
      <button className="btn btn-light" style={{width: "145px"}}>
        <FontAwesomeIcon icon={faCircleCheck} className="float-end" style={{color:"green", marginBottom:"10px"}}/>

        <select className="dropdown" style={{width: "100px"}}>
          <option selected className="dropdown-item">
              Publish All
          </option>
        </select>
      </button>
      <button className="btn btn-light"><FontAwesomeIcon icon={faEllipsisVertical}/></button>
    </div>
    </div>
    <div className="row" style={{marginTop: "50px", fontFamily: "calibri"}}>
    <ul className="list-group">
      <li className="list-group-item d-flex">
        <div className="row">
        <input value={module.name}
          onChange={(e) => 
            dispatch(setModule({ ...module, name: e.target.value }))}
          className="form-control mb-2"
        />
        <textarea value={module.description}
          onChange={(e) => 
            dispatch(setModule({ ...module, description: e.target.value }))}
          className="form-control"
        />
        </div>
        <div className="col-6 float-end">
          <br/><br/><br/>
          <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          className="btn btn-success float-end"
          style={{height:"50px", verticalAlign:"bottom"}}>
            Add</button>
          <button onClick={() => dispatch(updateModule(module))}
          className="btn btn-info float-end"
          style={{height:"50px", verticalAlign:"bottom", marginRight:"5px"}}>
                Update
          </button>
        </div>
      </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-secondary" style={{marginBottom:"10px"}}>
            <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "gray"}}/>
            <FontAwesomeIcon icon={faEllipsisVertical} style={{color: "gray", marginRight: "20px"}}/>
             <h3 style={{display: "inline"}}>{module.name}</h3>
            <FontAwesomeIcon icon={faEllipsisVertical} className="float-end"/>
            <FontAwesomeIcon icon={faPlus} className="float-end" style={{marginRight: "10px", marginLeft: "10px"}}/>
            <FontAwesomeIcon icon={faCircleCheck} className="float-end" style={{color:"green", marginBottom:"10px"}}/>
            <p>{module.description}</p>
            <button
              onClick={() => dispatch(deleteModule(module._id))}
              className="float-end btn btn-danger">
              Delete
            </button>
            <button
              onClick={() => dispatch(setModule(module))}
              className="float-end btn btn-info"
              style={{marginRight:"5px"}}>
              Edit
            </button>

           </li>
      ))
      }
    </ul>
    </div>
    </>
  );
}
export default ModuleList;