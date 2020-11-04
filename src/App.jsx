import React from "react";
import { Switch, Route } from "react-router-dom";
import CardSystem from './components/CardSystem';

function App() {
  return (
    <main className="container">
      <CardSystem />
      {/* <Switch>
        <Route exact path="/" component={CardSystem}/>
        <Route path="/CGU" component={CGU}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch> */}
    </main>
  );
}

export default App;
