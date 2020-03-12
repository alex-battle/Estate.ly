import React from 'react';

function AllPropertyList(props){
    return(
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
            </div>
        </div>
    )
}
export default AllPropertyList;