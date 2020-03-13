import React from 'react';
import StaffBanner from './StaffBanner'
import StaffTitle from './StaffTitle'
import StaffCard from './StaffCard';
import {findAllAgents} from '../services/ApiHelper'

class Staff extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            agentlist: []
        }
    }

async componentDidMount(){
    let response = await findAllAgents();
    this.setState({
      agentlist: response.data
    })
}

    render() {
        return (
            <div>
                <StaffBanner/>
                <StaffTitle/>
                <div className="staffCard">
                {this.state.agentlist.map((agent,index)=>(
                    <StaffCard key={index} agent={agent}/>
                ))}
                </div>
            </div>
        );
    }
}

export default Staff;