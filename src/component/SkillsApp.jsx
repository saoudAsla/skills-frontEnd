import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SkillsOverTime from './SkillsOverTime';
import LeftMenu from './LeftMenu';
import ManagerView from './ManagerView';
import Profile from './Profile';

class SkillsApp extends Component {
  render() {
    return (
      <Router>
        <>
          <Header />

          <LeftMenu />
          <Switch>
            <Route path="/" exact component={SkillsOverTime} />
            <Route path="/home" exact component={SkillsOverTime} />
            <Route path="/managerView" exact component={ManagerView} />
            <Route path="/profile/:id" exact component={Profile} />
          </Switch>

          <Footer />
        </>
      </Router>
    );
  }
}

export default SkillsApp;
