import React from 'react';
import Button from 'react-bootstrap/Button'
function AllPropertyList(props) {
    return (
        <div className="allPropertyList">
            <div className="allPropertyMap">
                map
            </div>
            <div className="allPropertyListData">
                {props.properties.address}
                <br></br>
                Rooms:{props.properties.rooms}
                <br></br>
                Bathrooms:{props.properties.bathrooms}
            <div className="allMoreInfoButton">
                <Button variant="outline-secondary" size='sm'>More Info</Button>
            </div>
            </div>
        </div>
    )
}
export default AllPropertyList;