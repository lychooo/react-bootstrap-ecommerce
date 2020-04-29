import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import Navigation from './Components/Navigation/navigation.component';
import Home from './Components/Home/home.component';
import ProductPage from './Components/ProductPage/product-page.component';
import Login from './Pages/Login/login.component';
import Register from './Pages/Register/register.component';
import Page404 from './Pages/Page404/page-404.component';
import ItemsOverview from './Components/ItemsOverview/items-overview.component';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          // console.log(this.state)
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.state;
    // console.log(currentUser)

    return (
      <div className="App">
        <Router>
          <Fragment>
            <Navigation currentUser={currentUser} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/drones" component={ItemsOverview} />
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

export default App;
