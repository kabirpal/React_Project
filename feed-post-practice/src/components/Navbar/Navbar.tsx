import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
          <Link className="navbar-brand" to="/">LogIn </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              {/* <Link className="nav-link" to="/">Home</Link> */}
              <Link className="nav-link active" aria-current="page" to="/Feed">Home</Link>
                <Link className="nav-link" to="/Password-generator">Password Generator</Link>
                <Link className="nav-link" to="/currency-converter">Currency Converter</Link>
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </div>
            </div>
          </div>
        </nav>
    </div>
  )
}
