import React from 'react';
import './App.css';
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css'
import {findAllAgents, findAllProperties} from './services/ApiHelper'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      searchInput: '',
      agentlist: [],
      propertylist: [],
      username:'',
      password: ''
     };
  }



  async componentDidMount(){
    let response = await findAllAgents();
    this.setState({
      agentlist: response.data
    })
  
    let respons = await findAllProperties();
    this.setState({
      propertylist: respons.data
    })
    // this.handleChange=this.handleChange.bind(this)
    // this.handleButtonClick= this.handleButtonClick.bind(this)
  }

  handleLogInChange =(e) =>{
    const {name, value} =e.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleLogIn = async (e) =>{
    e.preventDefault()
    const post = await axios({
      method: 'post',
      url: 'http://localhost:3000/auth/login',
      data: {username: this.state.username, password: this.state.password}
    })
    localStorage.setItem('token', post.data.token)
  }

  async allAgentHandleClick(e){
    let allAgents = await findAllAgents();
    console.log(allAgents)
    this.setState({
      agentlist: allAgents.data
    })
  }
  
  async allPropertyHandleClick(e){
    let allProperty = await findAllProperties();
    this.setState({
      propertylist: allProperty.data
    })
  }
  handleChange(e){
    let value = e.target.value
    this.setState({
      searchInput: value
    }
    )
  }

  
  
  render(){
    return (
      <div className="App">
      <Main 
      allAgentList = {this.state.agentlist}
      allPropertyList = {this.state.propertylist}
      allPropertyHandleClick={this.allPropertyList}
      allAgentHandleClick={this.allAgentHandleClick}
      handleLogInChange={this.handleLogInChange}
      handleLogIn={this.handleLogIn}
      searchInput={this.state.searchInput}
      />
    </div>
    );
  }
}

export default App;
