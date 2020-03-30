import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";
import SignInUpPage from "./pages/sign-in-up-page/sign-in-up.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shoppage} />
      <Route path="/signin" component={SignInUpPage} />
    </Switch>
  </div>
);

export default App;
