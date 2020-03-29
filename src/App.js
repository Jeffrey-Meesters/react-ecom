import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.component";

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop" component={Shoppage} />
    </Switch>
  </div>
);

export default App;
