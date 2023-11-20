import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const A5_URL = `${API_BASE}/a5`;
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const URL = `${A5_URL}/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <button onClick={updateTitle}
              className="btn btn-primary mb-2 float-end">
        Update Title to: {assignment.title}
      </button>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text" />
      <a
        href={`${URL}/score/${assignment.score}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Score
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            score: e.target.value })}
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number" />

      <a
        href={`${URL}/completed/${assignment.completed}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Completed
      </a>
      <input
        onChange={(e) => setAssignment({ ...assignment,
            completed: document.getElementById("CC").checked})}
        className="mb-2"
        id = "CC"
        type="checkbox" style={{width:"10px"}}/>
     
      <h4>Retrieving Objects</h4>
      <a href={`${A5_URL}/assignment`}
         className="btn btn-primary me-2">
        Get Assignment
      </a>
      <button onClick={fetchAssignment}
              className="me-2 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4>Retrieving Properties</h4>
      <a
        href={`${A5_URL}/assignment/title`}
        className="btn btn-primary me-2">
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;