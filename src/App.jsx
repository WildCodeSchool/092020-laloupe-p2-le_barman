import React from "react";
import Header from "./components/Header";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
// import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <Header />
      <Contact />
      {/* <Switch>
        <Route exact path="/" component={CardSystem}/>
        <Route path="/CGU" component={CGU}/>
        <Route path="/ContactUs" component={ContactUs}/>
      </Switch> */}
      <Footer />
    </main>
  );
}

export default App;
