import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={CardSystem}/>
        <Route path="/CGU" component={CGU}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch>
    </main>
  );
}

export default App;
