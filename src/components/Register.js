import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div>
            <div className="container my-5 col-md-5">
                <div className="card p-4">
                    <h3 className="container my-4">Please register to access Panda News</h3>
                    <form method="post" encType="application/x-www-form-urlencoded">
                        <div className="form-outline my-3">
                            <input type="text" name="first_name" id="first_name" className="form-control" />
                            <label className="form-label" htmlFor="first_name">First Name</label>
                        </div>

                        <div className="form-outline my-3">
                            <input type="text" name="last_name" id="last_name" className="form-control" />
                            <label className="form-label" htmlFor="last_name">Last Name</label>
                        </div>

                        <div className="form-outline my-3">
                            <input type="text" name="username" id="username" className="form-control" />
                            <label className="form-label" htmlFor="username">Username</label>
                        </div>

                        <div className="form-outline my-3">
                            <input type="email" id="email" name="email" className="form-control" />
                            <label className="form-label" htmlFor="email">Email</label>
                        </div>

                        <div className="form-outline my-3">
                            <input type="password" id="password1" name="password1" className="form-control" />
                            <label className="form-label" htmlFor="password1">Password</label>
                        </div>

                        <div className="form-outline my-3">
                            <input type="password" id="password2" name="password2" className="form-control" />
                            <label className="form-label" htmlFor="password2">Confirm Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="my-2">Have an account? <Link to="/login">Login</Link></p>
                </div>
            </div>

        </div >
    )
}

export default Register