import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function HomeForRent(){
    return(
            <div className="homeForRent">
                <div className="homeForRentLink">
                    <h2>
                        LUXURY RENTALS
                    </h2>
                    <h3>
                        Explore Our Most Desired Listings For Rent  
                    </h3>
                <Link to="/rent">
            <Button variant="outline-secondary" size='lg'>View</Button>
            </Link>
                </div>
            </div>
    )
}
export default HomeForRent;