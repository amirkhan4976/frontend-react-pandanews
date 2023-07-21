import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center text-lg-start">
            {/* <!-- Grid container --> */}
            <div className="container p-4">
                {/* <!--Grid row--> */}
                <div className="row">
                    {/* <!--Grid column--> */}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Panda News</h5>

                        <p>
                            Welcome to our comprehensive website, your go-to destination for the latest news and updates spanning business, entertainment, general, health, science, sports, and technology. Stay informed and ahead with our carefully curated articles, providing you with valuable insights into the ever-evolving world of these diverse fields. Discover a wealth of knowledge at your fingertips.
                        </p>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Categories</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/general" className="text-white">General</Link>
                            </li>
                            <li>
                                <Link to="/entertainment" className="text-white">Entertainment</Link>
                            </li>
                            <li>
                                <Link to="/science" className="text-white">Science</Link>
                            </li>
                            <li>
                                <Link to="/crypto" className="text-white">Crypto</Link>
                            </li>          <li>
                                <Link to="/loan" className="text-white">Loan</Link>
                            </li>          <li>
                                <Link to="/studentLoan" className="text-white">StudentLoan</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">More</h5>

                        <ul className="list-unstyled">
                            <li>
                                <Link to="sports" className="text-white">Sports</Link>
                            </li>
                            <li>
                                <Link to="/technology" className="text-white">Technology</Link>
                            </li>
                            <li>
                                <Link to="/business" className="text-white">Business</Link>
                            </li>
                            <li>
                                <Link to="/health" className="text-white">Health</Link>
                            </li>
                            <li>
                                <Link to="/hackers-hacking" className="text-white">Hackers</Link>
                            </li>
                            <li>
                                <Link to="/anonymous-hacking" className="text-white">Anonymous</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
            </div>
            {/* <!-- Grid container --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} >
                © 2023 Copyright:
                <Link className="text-white" to="/">PandaNews</Link>
            </div>
            {/* <!-- Copyright --> */}
        </footer >

    )
}

export default Footer