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
// import SearchResults from './SearchResults';
import HeaderNav from './HeaderNav';
import FooterNav from './FooterNav';
// import SearchResultDetails from './SearchResultDetails';
import Home from './Home'
import OpenHouse from './OpenHouse'
import Login from './Login'
// import axios from 'axios'


function Main(){
    return(
        <div>
            <div className="header">
            <HeaderNav />
            </div>
            <div>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><AboutUs /></Route>
            <Route exact path='/staff'><Staff /></Route>
            <Route exact path='/staff/:name'><AgentInfo /></Route>
            <Route exact path='/openhouse'><OpenHouse /></Route>
            <Route exact path='/contact'><ContactUs /></Route>
            <Route exact path='/rent'><ForRent /></Route>
            <Route exact path='/rent/:name'><ForRentInfo /></Route>
            <Route exact path='/sale'><ForSale /></Route>
            <Route exact path='/sale/:name'></Route>
            <Route exact path='/search'><Search /></Route>
            <Route exact path='/search/:name'></Route>
            <Route exact path='/search/list/'></Route>
            <Route exact path='/login'><Login /></Route>

            </div>
            <div className="footer">
            
            </div>
        </div>
    )
}
export default Main