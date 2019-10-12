import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Nav from '../Nav/Nav';
import HomePage from '../HomePage/HomePage';
import PetsPage from '../PetsPage/PetsPage';
import PetPage from '../PetPage/PetPage';
import AboutPage from '../AboutPage/AboutPage';
import './App.css';

import pets from '../PetsPage/pets.json';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route
            path="/pets/:id"
            render={props => <PetPage {...props} pets={pets} />}
          />
          <Route
            path="/pets"
            render={props => <PetsPage {...props} pets={pets} />}
          />

          <Route path="/about" component={AboutPage} />
          <Route path="" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
      </>
    );
  }
}
