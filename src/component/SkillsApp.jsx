import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SkillsOverTime from './SkillsOverTime';
import LeftMenu from './LeftMenu';
import PendingSkills from './PendingSkills';
import Profile from './profile';


class SkillsApp extends Component {
    render() {
        return (
            <Router>
                <>
            
                    <Header/>
                    

                    <Switch>
                        <Route path="/" exact component={SkillsOverTime} />
                        <Route path="/home" exact component={SkillsOverTime} />
                        <Route path="/pendingSkills" exact component={PendingSkills} />
                        <Route path="/profile/:id" exact component={Profile} />
                    </Switch>
                
                    <LeftMenu/>
                    <Footer/>
                </>
            </Router>
        )
    }
}

export default SkillsApp