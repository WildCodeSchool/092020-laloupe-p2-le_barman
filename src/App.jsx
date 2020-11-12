import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSystem from './components/CardSystem';
import CGU from "./components/CguPage";

function App() {
  return (
    <main className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={CardSystem} />
        <Route path="/CGU" component={CGU} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;