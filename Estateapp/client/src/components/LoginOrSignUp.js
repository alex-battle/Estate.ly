import React from 'react';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function LogInOrSignUp(){
    return(
        <div>
            <Link to="/signin">
            <Button variant="dark" size="lg">Log In</Button>
            </Link>
            <br></br>
            <Link to="/signup">
            <Button variant="dark" size="lg">Sign Up</Button>
            </Link>
        </div>
    )
}
export default LogInOrSignUp