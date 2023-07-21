import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext'

const UserProfile = () => {
  const context = useContext(NewsContext);
  const { accountInfo, fetch_account_info } = context;

  useEffect(() => {
    fetch_account_info();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-6 mb-4 mb-lg-0">
            <div className="card mb-3" style={{ borderRadius: '.5rem' }}>
              <div className="row g-0">
                <div className="col-md-4 gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <img src={`http://127.0.0.1:8000${accountInfo.profile_picture}`}
                    alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
                  <h5 className="text-muted"> {accountInfo.first_name}  {accountInfo.last_name} </h5>
                  <Link to="/edit-profile"><i className="far fa-edit mb-5"></i></Link>
                </div>
                <div className="col-md-8">
                  <div className="card-body p-4">
                    <h6>Information</h6>
                    <hr className="mt-0 mb-4" />
                    <div className="row pt-1">
                      <div className="col-6 mb-3">
                        <h6>Email</h6>
                        <p className="text-muted"> {accountInfo.email} </p>
                      </div>
                      <div className="col-6 mb-3">
                        <h6>Username</h6>
                        <p className="text-muted"> {accountInfo.username} </p>
                      </div>
                      <Link to="/password-change" className="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark">Change Password</Link>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start mb-3 mx-3">
                    <Link to="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></Link>
                    <Link to="#!"><i className="fab fa-twitter fa-lg me-3"></i></Link>
                    <Link to="#!"><i className="fab fa-instagram fa-lg"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default UserProfile