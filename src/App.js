import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Navigation/Navigation';
import Home from './Home/Home';
import ProductList from './ProductList/ProductList';
import ProductPage from './ProductPage/ProductPage';
import Login from './Services/Login/Login';
import Register from './Services/Register/Register';
import Page404 from './Services/Page404/Page404'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/drones" component={ProductList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/eachine/:id" component={ProductPage} />
            <Route path="*" component={Page404} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
