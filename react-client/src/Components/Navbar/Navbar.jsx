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
import logo from '../../assets/tgLogo.png';
import CreateScorecard from '../Scorecards/Create-Scorecard/Create-Scorecard';
import Auth from '../Auth/Auth';

const Navbar = (props) => {
    
    return (
        <div className="navbar">
            <div className="navbar-list-styling">
                <ul className="navbar-list list-unstyled">
                    <li><img src={logo} alt="Team Golf Logo" /></li>
                    <li><Link to="/CommunityScorecard">View Community Scorecards</Link></li>
                    <li><Link to="/PersonalScorecard">View My Scorecards</Link></li>
                    <li><Link to="/CreateScorecard">Create New Scorecard</Link></li>
                    <li><Link to="/"><button onClick={props.clickLogout}>Logout</button></Link></li>
                </ul>
            </div>
            <div className="navbar-route">
                <Switch>
                    <Route exact path="/">
                        {props.token !== undefined ? <Redirect to="/PersonalScorecard" /> : <Auth />}
                    </Route>
                    <Route exact path="/CommunityScorecard"><CommunityScorecard token={props.token}/></Route>
                    <Route exact path="/PersonalScorecard"><PersonalScorecard token={props.token}/></Route>
                    <Route exact path="/CreateScorecard"><CreateScorecard token={props.token}/></Route>
                </Switch> 
            </div>
        </div>
    );
};

export default Navbar;