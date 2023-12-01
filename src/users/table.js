import React, { useState, useEffect } from "react";
import * as client from "./client";
import { BsTrash3Fill, BsPlusCircleFill, BsFillCheckCircleFill, BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

function UserTable() {
    const deleteUser = async (user) => {
        try {
          await client.deleteUser(user);
          setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
          console.log(err);
        }
    };    
  const selectUser = async (user) => {
    try {
        const u = await client.findUserById(user._id);
        setUser(u);
    } catch (err) {
        console.log(err);
    }
  };
  const updateUser = async () => {
    try {
        const status = await client.updateUser(user);
        setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
        console.log(err);
    }
  };    
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ username: "", password: "", role: "USER" });
  const createUser = async () => {
    console.log("in create");
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
      console.log("u" + users);
    } catch (err) {
      console.log("Er: " + err);
    }
  };
  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  useEffect(() => { fetchUsers(); }, []);
  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead className="thead-darkk">
          <tr>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
          <tr>
            <td>
              <input value={user.username} className="form-control" placeholder="username" type="text"
              onChange={(e) => setUser({ ...user, username: e.target.value })}/>
              <input value={user.password} className="form-control" placeholder="password" type="password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}/>
            </td>
            <td>
              <input value={user.firstName} className="form-control" placeholder="first name" type="text"
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}/>
            </td>
            <td>
              <input value={user.lastName} className="form-control" placeholder="last name" type="text"
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}/>
            </td>
            <td>
              <select value={user.role} className="form-select"
              onChange={(e) => setUser({ ...user, role: e.target.value })}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </td>
            <td className="text-nowrap">
              <BsFillCheckCircleFill onClick={updateUser} 
              className="me-2 text-success fs-1 text" />
              <BsPlusCircleFill onClick={createUser}/>
            </td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td><Link to={`/Kanbas/account/${user._id}`} style={{textDecoration:"none", color:"black"}}>{user.username}</Link></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td className="text-nowrap">
                <button onClick={() => deleteUser(user)} className="btn btn-danger me-2">
                  <BsTrash3Fill />
                </button>
                <button className="btn btn-warning me-2">
                    <BsPencil onClick={() => selectUser(user)} />
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}
export default UserTable;