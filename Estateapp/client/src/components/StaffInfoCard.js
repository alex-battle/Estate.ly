import React from 'react';

class StaffInfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="staffInfoDetails">
                staff info
                <div className="staffInfoDescription">
                    <div className="staffPhoto">
                        photo
                    </div>
                    <div className="staffStats">
                        stats
                    </div>
                </div>
            </div>
        );
    }
}

export default StaffInfoCard;