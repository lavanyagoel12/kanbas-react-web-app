import { faArrowRight, faBan, faBell, faBullhorn, faBullseye, faCab, faCalendar, faChartSimple, faCircleCheck, faFileImport, faLocationCrosshairs, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModuleList from "../Modules/ModuleList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Home() {
  return (
    <div className="d-flex">
      <div style={{marginRight:"20px"}}>
      <ModuleList />
      </div>
    <div className="col-3 float-end" style={{marginRight: "10px"}}>
    <div className="row float-end">
    <div className="float-end">
      <a style={{fontSize: "20px"}}>Course Status</a> <br/>
      <button className="btn btn-light"><FontAwesomeIcon icon={faBan}/>
        Unpublish</button>
      <button className="btn btn-success" disabled>
        <FontAwesomeIcon icon={faCircleCheck}/>Published</button>
      <br/> <br/>
      
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faFileImport} style={{marginRight: "5px"}}/>Import Existing Content</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faBullseye}/><FontAwesomeIcon icon={faArrowRight} style={{marginRight: "5px"}}/> Import from Commons</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faLocationCrosshairs} style={{marginRight: "5px"}}/> Choose Home Page</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faChartSimple} style={{marginRight: "5px"}}/> View Course Stream</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faBullhorn} style={{marginRight: "5px"}}/> New Announcement</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faChartSimple} style={{marginRight: "5px"}}/> New Analytics</button>
      <button className="btn btn-light" style={{textAlign:"left", width: "100%"}}><FontAwesomeIcon icon={faBell} style={{marginRight: "5px"}}/> View Course Notifications</button>

      <br/> <br/>

      <ul className="list-group-flush" style={{marginTop: "20px"}}>
        <li className="list-group-item list-group-item-light">
          <h6>To Do</h6>
        </li>
        <li className="list-group-item list-group-item-light" style={{color: "red"}}>
          <FontAwesomeIcon icon={faXmark} className="float-end" style={{color: "gray"}}/>
          <span className="badge bg-danger badge-pill">1</span>
          <a>Grade A1 - ENV + HTML</a><br/>
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>100 points - Sep 18 at 11:59pm</a>
        </li>
      </ul>

      <ul className="list-group-flush" style={{marginTop: "20px"}}>
        <li className="list-group-item list-group-item-light">
          <p className="float-end" style={{color: "red", marginLeft: "5px", fontSize: "10px"}}>View Calendar</p>
          <FontAwesomeIcon icon={faCalendar} className="float-end"/>
          <h6>Coming Up</h6>
        </li>
        <li className="list-group-item list-group-item-light border-0">
          <FontAwesomeIcon icon={faCalendar}/>
          <a style={{color: "red", marginLeft: "10px"}}>Lecture</a><br/>
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>CS4550.12631.20340</a> <br/>
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>Sep 11 at 11:45am</a>
        </li>
        <li className="list-group-item list-group-item-light border-0">
          <FontAwesomeIcon icon={faCalendar}/>
          <a style={{color: "red", marginLeft: "10px"}}>CS5610 06 SP23 Lecture</a><br/>
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>CS4550.12631.20340</a> <br/>
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>Sep 11 at 6pm</a>
        </li>
        <li className="list-group-item list-group-item-light">
          <a style={{color: "gray", fontSize: "13px", marginLeft: "25px"}}>12 more in the next week...</a> <br/>
        </li>
      </ul>

    </div>
    </div>
    </div>
    </div>
  );
}
export default Home;