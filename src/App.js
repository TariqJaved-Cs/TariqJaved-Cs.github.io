import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Enroll from "./Enroll";
import Dsa from "./Dsa";
import SE from "./SE";
import DB from "./DB";
import CS from "./CS";
import AM from "./AM";
import DE from "./DE";


const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/Enroll" component={Enroll} />
        <Route exact path="/Dsa" component={Dsa} />
        <Route exact path="/SE" component={SE} />
        <Route exact path="/DB" component={DB} />
        <Route exact path="/CS" component={CS} />
        <Route exact path="/AM" component={AM} />
        <Route exact path="/DE" component={DE} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};
export default App;
