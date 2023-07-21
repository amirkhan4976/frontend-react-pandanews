import pandanews from '../pandanews.png'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NewsContext from '../context/NewsContext';

const Header = () => {
    const navigate = useNavigate();
    const context = useContext(NewsContext);
    const { accountInfo, fetch_account_info } = context;

    const logout_user = () => {
        localStorage.removeItem("access");
        navigate("/login");
    }

    useEffect(() => {
        fetch_account_info();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <header>
            {/* <!-- Navbar --> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    {/* <Link className="navbar-brand" to="/"><img src="pandanews" alt="Website logo PandaNews" /></Link> */}
                    <Link className="navbar-brand" to="/"><img src={pandanews} style={{ width: '7rem' }} alt="Website logo PandaNews" /></Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            className="navbar-toggler-icon"
                            style={{ backgroundImage: "var(--mdb-navbar-toggler-icon-bg)" }}
                        ></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general" >General</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment" >Entertainment</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science" >Science</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports" >Sports</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology" >Technology</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business" >Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health" >Health</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/crypto" >Crypto</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/loan" >Loan</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/student" >Student Loan</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/hackers-hacking" >Hacking</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/anonymous-hacking" >Anonymous</Link>
                            </li>
                        </ul>


                        {!localStorage.getItem("access") ?
                            <Link
                                className="btn text-white"
                                style={{ backgroundColor: "#0343ad" }}
                                to="/login"
                                role="button" profile_picture
                            >Login/Register</Link> :
                            <div className="dropdown mx-4">
                                <Link
                                    className="dropdown-toggle d-flex align-items-center hidden-arrow"
                                    to=""
                                    id="navbarDropdownMenuAvatar"
                                    role="button"
                                    data-mdb-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <img
                                        // src="{{ request.user.account.profile_picture_url.url }}"
                                        src={`http://127.0.0.1:8000${accountInfo.profile_picture}`}
                                        className="rounded-circle"
                                        height="25"
                                        alt="User Profile"
                                        loading="lazy"
                                    />
                                </Link>
                                <ul
                                    className="dropdown-menu dropdown-menu-end"
                                    aria-labelledby="navbarDropdownMenuAvatar"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item"
                                            to="/user-account"
                                        >My profile</Link>
                                    </li>

                                    <li>
                                        <button className="dropdown-item" onClick={logout_user}>Logout</button>
                                    </li>
                                </ul>
                            </div>}


                    </div>
                </div>
            </nav>
            {/* <!-- Navbar --> */}
        </header >
    )
}

export default Header