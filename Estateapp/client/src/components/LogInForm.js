import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function LogInForm(props){
return(
    <div className="login">
<Form onSubmit={props.handleLogIn}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="input" name="username" onChange={props.handleLogInChange} placeholder="Enter email" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" onChange={props.handleLogInChange} placeholder="Password" />
  </Form.Group>
  <Link to="/admin">
  <Button variant="light" type="submit">
    Submit
  </Button>
  </Link>
</Form>
</div>
)
}
export default LogInForm;