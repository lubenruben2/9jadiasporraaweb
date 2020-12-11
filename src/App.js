import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Culture from "./component/Culture/Culture";
import Main from "./component/news/Main";
import New from "./component/news/New";
import Footer from "./component/Footer/Footer";
import Sales from "./component/Sales/Sales";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <Router>
      <Route>
        <Header />

        <Switch>
          <Route path="/" exact component={Main}>
            <Main />
            <New />
          </Route>

          <Route path="/Culture.js" exact component={Culture} />

          <Route path="/About.js" exact component={About} />
          <Route path="/Contact.js" exact component={Contact} />

          <Route path="/Sales.js" exact component={Sales} />
        </Switch>

        <Footer />
      </Route>
    </Router>
  );
}

export default App;
