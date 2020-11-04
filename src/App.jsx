import React from "react";
import { Switch, Route } from "react-router-dom";
import CardSystem from './components/CardSystem';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="container">
      <Header />
      <CardSystem />
      {/* <Switch>
        <Route exact path="/" component={CardSystem} />
        <Route path="/CGU" component={CGU} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch> */}
      <Footer />
    </main>
  );
}

export default App;
