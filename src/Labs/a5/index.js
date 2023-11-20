import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjects from "./WorkingWithObjects";

function Assignment5() {
    const API_BASE = process.env.REACT_APP_API_BASE;
    const A5_URL = `${API_BASE}/a5`;
    return (
      <div>
        <h1>Assignment 5</h1>
        <div className="list-group">
          <a href={`${A5_URL}/welcome`}
             className="list-group-item">
            Welcome
          </a>
        </div>
        <EncodingParametersInURLs/>
        <WorkingWithObjects/>
        <WorkingWithArrays/>
      </div>
    );
  }
export default Assignment5;