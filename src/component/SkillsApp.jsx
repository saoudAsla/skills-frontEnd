import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SkillsOverTime from './SkillsOverTime';
import LeftMenu from './LeftMenu';
import PendingSkills from './PendingSkills';


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
                    </Switch>
                
                    <LeftMenu/>
                    <Footer/>
                </>
            </Router>
        )
    }
}

export default SkillsApp