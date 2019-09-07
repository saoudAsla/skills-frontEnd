import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import SkillsOverTime from './SkillsOverTime';
import LeftMenu from './LeftMenu';


class SkillsApp extends Component {
    render() {
        return (
            <Router>
                <>
            
                    <Header/>
                    <SkillsOverTime/>
                    <LeftMenu/>
                    <Footer/>
                    
                
                </>
            </Router>
        )
    }
}

export default SkillsApp