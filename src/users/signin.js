import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/account");
  };
  return (
    <div>
      <h1>Signin</h1>
      <label className="form-label">Username:
      <input value={credentials.username} className="form-control" type="text"
      onChange={(e) => setCredentials({...credentials, username: e.target.value})}/></label>
      <br/>
      <label className="form-label">Password:
      <input value={credentials.password} className="form-control" type="password"
      onChange={(e) => setCredentials({...credentials, password: e.target.value})}/></label>
      <br/>
      <button onClick={signin} className="btn btn-danger"> Signin </button>
    </div>
  );
}
export default Signin;