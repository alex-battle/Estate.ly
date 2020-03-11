import React from 'react';
// import { NavLink } from 'react-router-dom'
// import Navbar from 'bootstrap'

function HeaderNav(props) {
    return (
        <div className="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="/">Estate.ly</a>
            <button class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="/search">
                            Search
            <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">
                            About Us
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/staff" onClick={props.allAgentHandleClick}>Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/openhouse">Open House</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/sale">Buy Luxury</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/rent">Rent Luxury</a>
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