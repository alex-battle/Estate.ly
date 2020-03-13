import React from 'react';
import AllPropertyBanner from './AllPropertyBanner';
import AllPropertyTitle from './AllPropertyTitle'
import AllPropertyList from './AllPropertyList';

function AllProperty (props){
    return (
            <div className="allProperty">
                <AllPropertyBanner/>
                <AllPropertyTitle/>
                {props.allPropertyList.map((properties, index)=>(
                <AllPropertyList key={index} properties={properties}/>
                ))}
            </div>
        );
    }

export default AllProperty;