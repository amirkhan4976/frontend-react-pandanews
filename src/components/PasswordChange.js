import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const PasswordChange = () => {
    const backend_url = "http://127.0.0.1:8000/";
    const [credentials, setCredentials] = useState({ "old_password": "", "password1": "", "password2": "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const password_change = async (element) => {
        element.preventDefault();

        if (credentials.password1 === "") {
            setError("New Password cannot be empty.")
        } else if (credentials.password2 === "") {
            setError("Confirm Password cannot be empty.")
        } else if (credentials.password1 === credentials.password2) {
            setError("");
            const url = `${backend_url}api/user/change-password/`
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("access")
                },
                body: JSON.stringify({
                    "old_password": credentials.old_password,
                    "password1": credentials.password1,
                    "password2": credentials.password2
                })
            })
            const json = await response.json();
            if (json.access) {
                localStorage.setItem("access", json.access);
                navigate("/user-account");
            };
            if (json.Error) {
                setError(json.Error)
            }
        } else {
            setError("New password and Confirm password didn't match.");
        }
    };

    const onchange = (element) => {
        setCredentials({ ...credentials, [element.target.name]: element.target.value });
    };

    return (
        <div className="container my-5 col-md-5">

            <div className="card p-4">
                <div className="card-header px-3"><h3>Change Password</h3></div>

                {error && <div className="alert alert-danger" role="alert">
                    Error: {error} </div>}

                {/* {% endif %} */}
                <form method="POST" onSubmit={password_change} encType="application/x-www-form-urlencoded">
                    {/* <div className="form-outline my-3"> */}
                    <div className="my-3">
                        <label className="form-label" htmlFor="old_password">Old Password</label>
                        <input type="password" id="old_password" value={credentials.old_password} onChange={onchange} name="old_password" className="form-control" />
                    </div>

                    {/* <div className="form-outline my-3"> */}
                    <div className="my-3">
                        <label className="form-label" htmlFor="password1">New Password</label>
                        <input type="password" id="password1" value={credentials.password1} name="password1" onChange={onchange} className="form-control" />
                    </div>

                    {/* <div className="form-outline my-3"> */}
                    <div className="my-3">
                        <label className="form-label" htmlFor="password2">Confirm Password</label>
                        <input type="password" id="password2" value={credentials.password2} name="password2" onChange={onchange} className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary">Update Password</button>
                </form>

            </div>


        </div>
    )
}

export default PasswordChange