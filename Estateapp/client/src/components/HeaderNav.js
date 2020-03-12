import React from 'react';
// import { NavLink } from 'react-router-dom'
// import Navbar from 'bootstrap'

function HeaderNav(props) {
    return (
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Estate.ly</a>
            <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/login">Admin</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/search">
                            Search
            <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/staff">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/all">All Listings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/sale">Buy Luxury</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/rent">Rent Luxury</a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
        // <div className="header">
        //     <div className="leftNav">
        //         <NavLink to="/sale">Buy Luxury Properties</NavLink>
        //         <NavLink to="/search">Search All Properties</NavLink>
        //         <NavLink to="/rent">Luxury Rental Properties</NavLink>
        //     </div>
        //     <div className="centerNav">
        //     <NavLink to ="/">Home</NavLink>
        //     </div>
        //     <div className="rightNav">
        //         <NavLink to="/about">About Us</NavLink>
        //         <NavLink to="/staff">Team</NavLink>
        //         <NavLink to="/openhouse">Open House</NavLink>
        //         <NavLink to="/contact">Contact Us</NavLink>
        //     </div>
        //     <div className="login">
        //         <NavLink to="/login">Log In</NavLink>
        //     </div>
        // </div>
    )
};
export default HeaderNav