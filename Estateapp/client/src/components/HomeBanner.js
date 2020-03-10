import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
function HomeBanner(){
    return(
        <div className="homeBanner">
            <h1>The Leading New York City</h1>
            <h1>Luxury Real Estate Brokerage</h1>
            <Link to="/all">
            <Button variant="outline-dark" size='lg' classname="homeBannerButton">See All Properties</Button>
            </Link>
        </div>
    )
}
export default HomeBanner