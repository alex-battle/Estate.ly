import React from 'react';
import StaffBanner from './StaffBanner'
import StaffTitle from './StaffTitle'

class Staff extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <StaffBanner/>
                <StaffTitle/>
            </div>
        );
    }
}

export default Staff;