import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import GenelTanimlar from "../../views/GenelTanimlar";
import Profil from "../../views/GenelTanimlar/Profil/Profil";


import Dashboard from '../../views/Dashboard/';

class Full extends Component {
  render() {
    return <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props} />
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard} />
                <Route path="/geneltanimlar" name="GenelTanimlar" component={GenelTanimlar} />
                <Route path="/profil" name="Profil" component={Profil} />
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>;
  }
}

export default Full;
