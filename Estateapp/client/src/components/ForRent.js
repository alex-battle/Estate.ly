import React from 'react';
import ForRentBanner from './ForRentBanner';
import ForRentTitle from './ForRentTitle';
import ForRentList from './ForRentList';

class For_Rent extends React.Component {
    state = {  }
    render(){
        return (
            <div>
                <ForRentBanner/>
                <ForRentTitle/>
                <ForRentList/>
            </div>
        )
    }
}

export default For_Rent;