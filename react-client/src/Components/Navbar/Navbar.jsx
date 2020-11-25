import React from 'react';
import './Navbar.css';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import CommunityScorecard from '../Scorecards/Community-Scorecard/Community-Scorecard';
import PersonalScorecard from '../Scorecards/Personal-Scorecard/Personal-Scorecard';
import logo from '../../assets/tgLogo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-list-styling">
                <ul className="navbar-list list-unstyled">
                    <li><img src={logo} alt="Team Golf Logo" /></li>
                    <li><Link to="/CommunityScorecard">View Community Scorecards</Link></li>
                    <li><Link to="/PersonalScorecard">View My Scorecards</Link></li>
                </ul>
            </div>
            <div className="navbar-route">
                <Switch>
                    <Route exact path="/CommunityScorecard"><CommunityScorecard /></Route>
                    <Route exact path="/PersonalScorecard"><PersonalScorecard /></Route>
                </Switch>
            </div>
        </div>
    );
};

export default Navbar;