import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

function AdminPage() {
    return (
        <div>
            <Link to="/admin/updateagent/1">
                <Button variant="dark" size="lg">Agent</Button>
            </Link>
            <br></br>
            <Link to="/admin/updateproperty/:id">
                <Button variant="dark" size="lg">Property</Button>
            </Link>
        </div>
    )
}
export default AdminPage;