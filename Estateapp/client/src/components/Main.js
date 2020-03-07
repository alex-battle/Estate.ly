import React from 'react';
import {Route} from 'react-router-dom'
import About_Us from './About_us'
import Contact_Us from './Contact_Us'
import Staff from './Staff'
import Agent_info from './Agent_info'
import For_Rent from './For_Rent';
import For_rent_info from './For_rent_info';
import For_Sale from './For_Sale';
import Search from './Search';
import Search_Results from './Search_Results';
import HeaderNav from './HeaderNav';
import FooterNav from './FooterNav';
import Search_Result_Details from './Search_Result_Details';
import Home from './Home'
import Open_House from './Open_House'
import axios from 'axios'


function Main(){
    return(
        <div>
            <div className="header">
            <HeaderNav />
            </div>
            <div>
            <Route exact path='/'><Home /></Route>
            <Route exact path='/about'><About_Us /></Route>
            <Route exact path='/staff'><Staff /></Route>
            <Route exact path='/staff/:name'><Agent_info /></Route>
            <Route exact path='/openhouse'><Open_House /></Route>
            <Route exact path='/contact'><Contact_Us /></Route>
            <Route exact path='/rent'><For_Rent /></Route>
            <Route exact path='/rent/:name'><For_rent_info /></Route>
            <Route exact path='/sale'><For_Sale /></Route>
            <Route exact path='/sale/:name'></Route>
            <Route exact path='/search'><Search /></Route>
            <Route exact path='/search/:name'></Route>
            <Route exact path='/search/list/'></Route>

            </div>
            <div className="footer">
            <FooterNav />
            </div>
        </div>
    )
}
export default Main