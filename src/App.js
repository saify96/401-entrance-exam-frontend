import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header'
import Home from './Components/Home'
import Favorite from './Components/Favorite'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorite">
            <Favorite />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
