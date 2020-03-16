import React from 'react';
import {readPropertiesById, updateProperties, destroyProperties, createProperties} from '../services/ApiHelper'
import {Form, Button} from 'react-bootstrap'

class UpdateProperty extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            propertiesForm: {
              name: '',
              email: '',
              phoneNumber: '',
              website: ''  
            }, 
            id: ''
    };
    }

    handlepropertiesUpdateSubmit = async (e) => {
        e.preventDefault()
        const { propertiesForm } = this.state
        await updateProperties(propertiesForm.id, propertiesForm);
        this.props.history.push("/all")
    }


handlepropertiesUpdateChange = (e) => {
    const { name, value } = e.target;
    console.log(this.state)
    this.setState(prevState => ({
        propertiesForm: {
            ...prevState.propertiesForm,
            [name]: value
        }
    }))
}

mountEditForm = async (id) => {
    const properties = await readPropertiesById(id);
    this.setState({
        propertiesForm: properties
    });
}
newproperties = async (e) => {
    e.preventDefault();
    let {propertiesForm} = this.state;
    const properties = await createProperties(this.state.propertiesForm);
    this.setState(prevState => ({
      properties: [...prevState.propertiess, properties],
      propertiesForm: {
        name: "",
        email: "",
        phoneNumber:"",
        website: ""
      }
    }))
  }

  deleteproperties = async (id) => {
    await destroyProperties(id);
    this.setState(prevState => ({
      properties: prevState.properties.filter(properties => properties.id !== id)
    }))
  }
// mountDeleteForm = async (id) =>
//     const properties = await 

componentDidMount(){
    this.mountEditForm(this.props.match.params.id)
}

render(){
    const{id} = this.state;
    console.log(id)
    console.log(this.state)
    return (
        <div className="updateProperties">
            <Form onSubmit={this.handlepropertiesUpdateSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name="address" value={this.state.propertiesForm.address} onChange={this.handlepropertiesUpdateChange} placeholder="Enter address" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Control type="text" name="propertyType" value={this.state.propertiesForm.propertyType} onChange={this.handlepropertiesUpdateChange} placeholder="Property Type" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Rooms</Form.Label>
                    <Form.Control type="text" name="rooms" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.rooms} placeholder="Rooms" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Bathrooms</Form.Label>
                    <Form.Control type="text" name="bathrooms" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.bathrooms} placeholder="Bathrooms" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Rent Amount</Form.Label>
                    <Form.Control type="text" name="rentAmount" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.rentAmount} placeholder="Rent Price" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Rented To</Form.Label>
                    <Form.Control type="text" name="rentedTo" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.rentedTo} placeholder="Rented To?" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Purchase Price</Form.Label>
                    <Form.Control type="text" name="purchasePrice" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.purchasePrice} placeholder="Cost" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Sold To</Form.Label>
                    <Form.Control type="text" name="soldTo" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.soldTo} placeholder="Buyer" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Availability</Form.Label>
                    <Form.Control type="text" name="availability" onChange={this.handlepropertiesUpdateChange} value={this.state.propertiesForm.availibility} placeholder="Available?" />
                </Form.Group>

                <Button variant="light" type="submit">
                    Update
            </Button>
            <Button onClick={() => {
                  createProperties(this.state.propertiesForm);
                  this.props.history.push('/')
                }}>Create</Button>
            <Button onClick={() => {
                  this.deleteProperties(id);
                  this.props.history.push('/all')
                }}>Delete</Button>
            </Form>
            
        </div>
    )
}
}

export default UpdateProperty;
