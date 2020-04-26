import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './Components/Navigation/navigation.component';
import Home from './Components/Home/home.component';
import ProductPage from './Components/ProductPage/product-page.component';
import Login from './Services/Login/login.component';
import Register from './Services/Register/register.component';
import Page404 from './Services/Page404/page-404.component';
import Drones from './Components/Drones/drones.component';

function App() {
  
  return (
    <div className="App">
        <Router>
          <Fragment>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/drones" component={Drones} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/eachine/:id" component={ProductPage} />
              <Route path="*" component={Page404} />
            </Switch>
          </Fragment>
        </Router>
    </div >
  );
}

export default App;
