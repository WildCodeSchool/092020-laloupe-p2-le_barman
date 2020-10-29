import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={CardSystem}/>
        <Route path="/CGU" component={CGU}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch>
    </main>
  );
}

export default App;
