import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faGauge, faBook, faCalendarDays, faInbox, faClock, faComputer, faArrowRightFromBracket, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
  const icons = [faUserCircle, faGauge, faBook, faCalendarDays, faInbox, faClock, faComputer, faArrowRightFromBracket, faCircleQuestion];
  const { pathname } = useLocation();
  return (
    <div className="list-group col-12" style={{ width: 80, fontFamily: "calibri", backgroundColor: "black", marginRight:"15px"}}>
      <ul className="wd-kanbas-navigation list-group">
        <li className="list-group-item">
            <img src="../../images/NU.png" style={{width:"80%", height:"100%"}}></img>
        </li>
        {links.map((link, index) => (
        <>
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item lgia ${pathname.includes(link) && "active"}`}>
          <li>
            <FontAwesomeIcon icon = {icons.find(a => icons.indexOf(a) === index)} size="2x" 
            className={`${index===0 ? "gray" : "bar"} ${index===2 ? "" : "inverse"}`}/>
            <br />
            {link}
          </li>
        </Link>
        </>
      ))}
      </ul>
    </div>
  );
}
export default KanbasNavigation;


        //   <i class="fa-solid fa-circle-user fa-inverse fa-2x bar" style="color: gray;"></i>
        //   <i class="fa-solid fa-gauge fa-inverse fa-2x bar"></i>
        //   <i class="fa-solid fa-book fa-2x bar"></i>
        //   <i class="fa-solid fa-calendar-days fa-inverse fa-2x bar"></i>
        //   <i class="fa-solid fa-inbox fa-inverse fa-2x bar"></i>
        //    <i class="fa-solid fa-clock fa-inverse fa-2x bar"></i>
        //     <i class="fa-solid fa-computer fa-inverse fa-2x bar"></i>
        //     <i class="fa-solid fa-arrow-right-from-bracket fa-inverse fa-2x bar"></i>
        //     <i class="fa-solid fa-circle-question fa-inverse fa-2x bar"></i>
