import React from 'react';
import ForSaleBanner from './ForSaleBanner';
import ForSaleTitle from './ForSaleTitle';

class For_sale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ForSaleBanner/>
                <ForSaleTitle/>
            </div>
        );
    }
}

export default For_sale;