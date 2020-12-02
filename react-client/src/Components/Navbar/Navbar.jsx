import React from 'react';
import './Navbar.css';
import {
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom';
import CommunityScorecard from '../Scorecards/Community-Scorecard/Community-Scorecard';
import PersonalScorecard from '../Scorecards/Personal-Scorecard/Personal-Scorecard';
import CreateScorecard from '../Scorecards/Create-Scorecard/Create-Scorecard';
import logo from '../../assets/tgLogo.png';
import Auth from '../Auth/Auth';

const Navbar = (props) => {
    
    return (
        <div className="navbar">
                <ul className="navbar-list">
                    <li><img className="logo" src={logo} alt="Team Golf Logo" /></li>
                    <li><Link to="/CommunityScorecard">View Community Scorecards</Link></li>
                    <li><Link to="/PersonalScorecard">View My Scorecards</Link></li>
                    <li><Link to="/CreateScorecard">Create Scorecard</Link></li>
                    <li><Link to="/"><button className="logoutBtn" onClick={props.clickLogout}>Logout</button></Link></li>
                </ul>
            <div className="navbar-route">
                <Switch>
                    <Route exact path="/CommunityScorecard"><CommunityScorecard token={props.token}/></Route>
                    <Route exact path="/PersonalScorecard"><PersonalScorecard token={props.token}/></Route>
                    <Route exact path="/CreateScorecard"><CreateScorecard /></Route>
                    <Route exact path="/">
                    {props.token !== undefined ? <Redirect to="/PersonalScorecard" /> : <Auth />}
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Navbar;