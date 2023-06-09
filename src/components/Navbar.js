import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Accounts</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/addAccount">Add Account</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/editDeleteAccount">Edit-Delete Account</NavLink>
                </li>
            </ul>
        </div>
       </div>
       </nav>
  )
}

export default Navbar
