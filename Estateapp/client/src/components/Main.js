import React from 'react';
import {Route} from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Staff from './Staff'
import AgentInfo from './StaffInfo'
import ForRent from './ForRent';
import ForRentInfo from './ForRentInfo';
import ForSale from './ForSale';
import Search from './Search';
import HeaderNav from './HeaderNav';
import SearchResultDetails from './SearchResultDetails';
import Home from './Home'
import AllProperty from './AllProperty'
import LogInOrSignUp from './LoginOrSignUp'
import LogInForm from './LogInForm'
import SignUp from './SignUp'


function Main(props){
    return(
        <div>
            <div className="header">
            <HeaderNav allAgentHandleClick={props.allAgentHandleClick} />
            </div>
            <div>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/login'><LogInOrSignUp/></Route>
            <Route exact path='/signin'><LogInForm/></Route>
            <Route exact path='/signup'><SignUp/></Route>
            <Route exact path='/about'><AboutUs /></Route>
            <Route exact path='/staff'><Staff allAgentList={props.allAgentList} allAgentHandleClick={props.allAgentHandleClick} /></Route>
            <Route exact path='/staff/:name'><AgentInfo allAgentList={props.allAgentList} allAgentHandleClick={props.allAgentHandleClick}/></Route>
            <Route exact path='/all'><AllProperty allPropertyList={props.allPropertyList} allPropertyHandleClick={props.allPropertyHandleClick}/></Route>
            <Route exact path='/contact'><ContactUs /></Route>
            <Route exact path='/rent'><ForRent /></Route>
            <Route exact path='/rent/:name'><ForRentInfo /></Route>
            {/* <Route exact path='/rent/list/'></Route> */}
            <Route exact path='/sale'><ForSale /></Route>
            {/* <Route exact path='/sale/results'><ForSaleResults/></Route> */}
            <Route exact path='/sale/:name'></Route>
            <Route exact path='/search'><Search handleChange={props.handleChange} searchInput={props.searchInput}/></Route>
            <Route exact path='/search/:name'><SearchResultDetails/></Route>
            {/* <Route exact path='/login'><Login /></Route> */}
            </div>
            <div className="footer">
            
            </div>
        </div>
    )
}
export default Main