import React from 'react';
import {readAgentById, updateAgent, destroyAgent, createAgent} from '../services/ApiHelper'
import {Form, Button} from 'react-bootstrap'

class UpdateAgent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            agentForm: {
              name: '',
              email: '',
              phoneNumber: '',
              website: ''  
            }, 
            id: ''
    };
    }

    handleAgentUpdateSubmit = async (e) => {
        e.preventDefault()
        const { agentForm } = this.state
        await updateAgent(agentForm.id, agentForm);
        this.props.history.push("/staff")
    }


handleAgentUpdateChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state)
    this.setState(prevState => ({
        agentForm: {
            ...prevState.agentForm,
            [name]: value
        }
    }))
}

mountEditForm = async (id) => {
    const agent = await readAgentById(id);
    this.setState({
        agentForm: agent
    });
}
newAgent = async (e) => {
    e.preventDefault();
    let {agentForm} = this.state;
    console.log(agentForm, 'adal')
    const agent = await createAgent(this.state.agentForm);
    this.setState(prevState => ({
      agent: [...prevState.agents, agent],
      agentForm: {
        name: "",
        email: "",
        phoneNumber:"",
        website: ""
      }
    }))
  }
// mountDeleteForm = async (id) =>
//     const agent = await 

componentDidMount(){
    this.mountEditForm(this.props.match.params.id)
}

render(){
    const{id} = this.state;
    console.log(id)
    console.log(this.state)
    return (
        <div className="updateAgent">
            <Form onSubmit={this.handleAgentUpdateSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" value={this.state.agentForm.name} onChange={this.handleAgentUpdateChange} placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={this.state.agentForm.email} onChange={this.handleAgentUpdateChange} placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" name="phoneNumber" value={this.state.agentForm.phoneNumber} onChange={this.handleAgentUpdateChange} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" name="website" onChange={this.handleAgentUpdateChange} value={this.state.agentForm.website} placeholder="Password" />
                </Form.Group>

                <Button variant="light" type="submit">
                    Submit
            </Button>
            <Button onClick={() => {
                  createAgent(this.state.agentForm);
                  this.props.history.push('/staff')
                }}>Create</Button>
            {/* <Button onClick={() => {
                  destroyAgent(2);
                  this.props.history.push('/staff')
                }}>Delete</Button> */}
            </Form>
        </div>
    )
}
}

export default UpdateAgent;
