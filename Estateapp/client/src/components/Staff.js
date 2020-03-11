import React from 'react';
import StaffBanner from './StaffBanner'
import StaffTitle from './StaffTitle'
import StaffCard from './StaffCard';

class Staff extends React.Component {
    constructor(props){
        super(props)
        this.state = { }
    }
    render() {
        return (
            <div>
                <StaffBanner/>
                <StaffTitle/>
                {this.props.allAgentList.map((agent,index)=>(
                    <StaffCard key={index} agent={agent}/>
                ))}
            </div>
        );
    }
}

export default Staff;