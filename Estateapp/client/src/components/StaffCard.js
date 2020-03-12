import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

class StaffCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div>
                <Card style={{ width: '35rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{this.props.agent.name}</Card.Title>
                       <Link to="/staff/:name" ><Button variant="light">View Profile</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default StaffCard;