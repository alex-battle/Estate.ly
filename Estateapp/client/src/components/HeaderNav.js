import React from 'react';
import {NavLink} from 'react-router-dom'

function HeaderNav(){
    return(
    <div>
        <div className="leftNav">
            <NavLink to="/sale">Buy Luxury Properties</NavLink>
            <NavLink to="/search">Search All Properties</NavLink>
            <NavLink to="/rent">Luxury Rental Properties</NavLink>
        </div>
        <div className="centerNav">
        <NavLink to ="/">Home</NavLink>
        </div>
        <div className="rightNav">
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/staff">Team</NavLink>
            <NavLink to="/openhouse">Open House</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
        </div>
    </div>
    )
}
export default HeaderNav