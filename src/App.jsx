import React from "react";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Switch>
        <Route exact path="/" component={CardSystem}/>
        <Route path="/CGU" component={CGU}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch>
      <Footer />
    </main>
  );
}

export default App;