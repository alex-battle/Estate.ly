import React from 'react';
import {Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Staff from './Staff'
import AgentInfo from './AgentInfo'
import ForRent from './ForRent';
import ForRentInfo from './ForRentInfo';
import ForSale from './ForSale';
import Search from './Search';
import HeaderNav from './HeaderNav';
import SearchResultDetails from './SearchResultDetails';
import Home from './Home'
import OpenHouse from './OpenHouse'
import Login from './Login'


function Main(props){
    return(
        <div>
            <div className="header">
            <HeaderNav allAgentHandleClick={props.allAgentHandleClick} />
            </div>
            <div>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><AboutUs /></Route>
            <Route exact path='/staff'><Staff allAgentlist={props.allAgentlist} allAgentHandleClick={props.allAgentHandleClick} /></Route>
            <Route exact path='/staff/:name'><AgentInfo /></Route>
            <Route exact path='/openhouse'><OpenHouse /></Route>
            <Route exact path='/contact'><ContactUs /></Route>
            <Route exact path='/rent'><ForRent /></Route>
            <Route exact path='/rent/:name'><ForRentInfo /></Route>
            {/* <Route exact path='/rent/list/'></Route> */}
            <Route exact path='/sale'><ForSale /></Route>
            {/* <Route exact path='/sale/results'><ForSaleResults/></Route> */}
            <Route exact path='/sale/:name'></Route>
            <Route exact path='/search'><Search /></Route>
            <Route exact path='/search/:name'><SearchResultDetails/></Route>
            <Route exact path='/login'><Login /></Route>
            </div>
            <div className="footer">
            
            </div>
        </div>
    )
}
export default Main