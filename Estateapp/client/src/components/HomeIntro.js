import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

function HomeIntro(){
    return(
        <div className="homeIntro">
            <div className="homeTitle">
                Estate.ly
            </div>
            <div className="homeDescription">
                <div className="introColumn1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac. Consectetur adipiscing elit ut aliquam purus. Vel eros donec ac odio tempor orci dapibus ultrices in. Sed arcu non odio euismod lacinia at quis risus. Nisl nunc mi ipsum faucibus. In vitae turpis massa sed elementum tempus egestas sed. Leo duis ut diam quam nulla. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus et. Ut aliquam purus sit amet luctus. Semper feugiat nibh sed pulvinar. Cursus mattis molestie a iaculis at erat pellentesque. Gravida rutrum quisque non tellus orci ac auctor augue. At imperdiet dui accumsan sit. Faucibus a pellentesque sit amet porttitor eget dolor. Diam vel quam elementum pulvinar etiam non. Sem nulla pharetra diam sit amet.</p>
                
                </div>
                <div className="introColumn2">
                <p>A arcu cursus vitae congue mauris rhoncus aenean. Morbi leo urna molestie at elementum eu facilisis sed. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Purus in mollis nunc sed. Tortor condimentum lacinia quis vel eros. Vel eros donec ac odio tempor orci. Iaculis nunc sed augue lacus. Condimentum id venenatis a condimentum. Felis eget nunc lobortis mattis. Nibh tellus molestie nunc non blandit. Facilisis sed odio morbi quis commodo odio aenean. Lacus laoreet non curabitur gravida arcu ac tortor. Neque egestas congue quisque egestas diam. Neque ornare aenean euismod elementum. Id neque aliquam vestibulum morbi blandit cursus risus at. Morbi tristique senectus et netus et malesuada fames. Netus et malesuada fames ac. Mi bibendum neque egestas congue quisque. At lectus urna duis convallis convallis tellus id interdum velit.</p>
                </div>
            </div>
            <Link to="/about">
            <Button variant="outline-dark" size='lg' classname="homeBannerButton">Learn More</Button>
            </Link>
        </div>
    )
}
export default HomeIntro