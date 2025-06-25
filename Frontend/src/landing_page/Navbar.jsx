import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* Navbar */}

      <nav className="navbar navbar-expand-lg border-bottom pb-3" style={{ backgroundColor: "white" }}>
        <div className="container">
          <a className="navbar-brand" href="#"><img src="media/images/logo.svg" alt="Logo" style={{ width: "30%" }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Signup</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">About</a>
                </li>
                
                <li className="nav-item">
                  <a className="nav-link active" href="#">Products</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">Pricing</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" href="#">Support</a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>


    </div>
  )
}
