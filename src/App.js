import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AddPage } from "./components/pages/AddPage";
import { ResultPage } from "./components/pages/ResultPage";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AddPage} />
            <Route path="/result" component={ResultPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
