import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faEllipsisVertical, faPlus } from "@fortawesome/free-solid-svg-icons";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
      <button className="btn btn-danger"><FontAwesomeIcon icon={faPlus} style={{marginRight: "5px"}} />Module</button>
      <button className="btn btn-light"><FontAwesomeIcon icon={faEllipsisVertical}/></button>
    </div>
    </div>
    <div className="row" style={{marginTop: "50px", fontFamily: "calibri"}}>
    <ul className="list-group">
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
           </li>
      ))
      }
    </ul>
    </div>
    </>
  );
}
export default ModuleList;