import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ "username": "", "password": "" });
    const [error, setError] = useState("");

    const login_submit = async (element) => {
        element.preventDefault();
        const backend_url = "http://127.0.0.1:8000/api/user/login/";
        try {
            const response = await fetch(backend_url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "username": credentials.username,
                    "password": credentials.password
                })
            });
            const json = await response.json();
            if (json.access) {
                localStorage.setItem("access", json.access);
                navigate("/user-account")
            } else {
                setError(json.error);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const change_credentials = (element) => {
        setCredentials({ ...credentials, [element.target.name]: element.target.value })
    }

    useEffect(() => {
        if (localStorage.getItem("access")) {
            navigate("/");
        };
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            <div className="container my-5 col-md-5">
                <div className="card p-4">

                    {error && <div className="alert alert-danger" role="alert">
                        Error: {error} </div>}

                    <h3 className="mb-2">Login to read Panda News</h3>


                    <form method="post" onSubmit={login_submit} encType="application/x-www-form-urlencoded">

                        <input type="hidden" value="{{ request.GET.next }}" name="next" />

                        {/* <div className="form-outline"> */}
                        <div className='my-2'>
                            <label className="form-label" htmlFor="username">Username</label>
                            <input type="text" name="username" value={credentials.username} onChange={change_credentials} id="username" className="form-control" />
                        </div>

                        {/* <div className="form-outline my-3"> */}
                        <div className='my-2'>
                            <label className="form-label" htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" value={credentials.password} onChange={change_credentials} className="form-control" />
                        </div>

                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="my-2">Forgot password? <Link to="{% url 'reset_password' %}">Reset</Link></p>
                    <p className="my-2">No account? <Link to="/register">Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login