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
                <StaffCard />
            </div>
        );
    }
}

export default Staff;