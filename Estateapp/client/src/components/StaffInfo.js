import React from 'react';
import StaffInfoBanner from './StaffInfoBanner';
import StaffInfoCard from './StaffInfoCard'
class Agent_info extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <StaffInfoBanner/>
                <StaffInfoCard/>
            </div>
        );
    }
}

export default Agent_info;