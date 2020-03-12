import React from 'react';
import ForSaleBanner from './ForSaleBanner';
import ForSaleTitle from './ForSaleTitle';
import ForSaleList from './ForSaleList';

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
                <ForSaleList/>
            </div>
        );
    }
}

export default For_sale;