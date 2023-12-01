import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function Account() {
    const [account, setAccount] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const signout = async () => {
        console.log("going to signin");
        await client.signout();
        navigate("/Kanbas/signin");
    };    
    const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
    };    
    const fetchAccount = async () => {
        try {
            const account = await client.account();
            setAccount(account);
            if(account == null) {
                navigate("/Kanbas/signin");
            }
        } catch (error) {
            console.log("going to signin");
            navigate("/Kanbas/signin");
        }
    };
    const save = async () => {
        try {
            await client.updateUser(account);
        } catch (error) {
            console.log("Eror: " + error);
        }
    };
    useEffect(() => {
        if (id) {
          findUserById(id);
        } else {
          fetchAccount();
        }
      }, []);    
    return (
        <div className="w-50">
            <h1>Account</h1>
            {account && (
                <div>
                    <input value={account.password} className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    <input value={account.firstName} className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                    <input value={account.lastName} className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    <input value={account.dob} className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    <input value={account.email} className="form-control"
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select className="form-select form-control" onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER" selected={"USER" === account.role}>User</option>
                        <option value="ADMIN" selected={"ADMIN" === account.role}>Admin</option>
                        <option value="FACULTY" selected={"FACULTY" === account.role}>Faculty</option>
                        <option value="STUDENT" selected={"STUDENT" === account.role}>Student</option>
                    </select>
                    <button onClick={save} className="btn btn-success">
                        Save
                    </button>
                    <button onClick={signout} className="btn btn-danger">
                        Signout
                    </button>
                    <Link to="/Kanbas/admin/users" className="btn btn-info w-100">Users</Link>
                </div>
            )}
        </div>
    );
}
export default Account;