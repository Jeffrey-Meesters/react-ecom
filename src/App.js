import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/sign-in-up-page/sign-in-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubFromAuth = null;
  componentDidMount() {
    this.unsubFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
          <Route path="/signin" component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
