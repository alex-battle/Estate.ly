import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function HomeForSale(){
    return(
        <div className="homeForSale">
            {/* <div className="homeForSalebackground"> */}
                
            {/* </div> */}
            <div className="homeForSaleLink">
                <h2>
                    EXCLUSIVE HOMES
                </h2>
                <h3>
                    View Our Featured Listings For Sale
                </h3>
                <Link to="/sale">
            <Button variant="outline-secondary" size='lg'>View</Button>
            </Link>
            </div>
        </div>
    )
}
export default HomeForSale;