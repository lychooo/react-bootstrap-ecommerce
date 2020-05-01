import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Navigation from './Components/Navigation/navigation.component';
import Home from './Components/Home/home.component';
import ProductPage from './Components/ProductPage/product-page.component';
import Login from './Pages/Login/login.component';
import Register from './Pages/Register/register.component';
import Page404 from './Pages/Page404/page-404.component';
import ProductsCategory from './Components/ProductsCategory/products-category.component';
import Checkout from './Pages/Checkout/checkout.component';

import { setCurrentUser } from './redux/user/user.action';
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <div className="App">
        <Router>
          <Fragment>
            <Navigation />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/drones" component={ProductsCategory} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/login" render={() => currentUser ? (<Redirect to='/' />) : (<Login />)} />
              <Route exact path="/register" render={() => currentUser ? (<Redirect to='/' />) : (<Register />)} />
              <Route path="/eachine/:id" component={ProductPage} />
              <Route path="*" component={Page404} />
            </Switch>
          </Fragment>
        </Router>
      </div >
    );
  };
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
