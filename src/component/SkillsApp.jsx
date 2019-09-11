import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import ManagerView from './ManagerView';
import Profile from './Profile';
import EmployeeSkills from './EmployeeSkills';
import MyOwnSkills from './MyOwnSkills';

class SkillsApp extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <Router>
            <>
              <div className="row flex-xl-nowrap">
                <div className="col-12 col-md-3 col-xl-2 bd-sidebar collapsable" >
                  <LeftMenu />
                </div>
                <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" role="main">
                  <Switch>
                    <Route path="/" exact component={MyOwnSkills} />
                    <Route path="/home/:id" exact component={MyOwnSkills} />
                    <Route path="/managerView" exact component={ManagerView} />
                    <Route path="/EmployeeSkills" exact component={EmployeeSkills} />
                    <Route path="/profile/:id" exact component={Profile} />
                  </Switch>
                </div>
              </div>
            </>
          </Router>
        </div>
        <Footer />
      </div>

    );
  }
}

export default SkillsApp;
