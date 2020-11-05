import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CGU from "./components/CguPage";
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Header />
      <CGU />
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
