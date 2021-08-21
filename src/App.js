import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import LandingPage from "./views/LandingPage";
import CataloguePage from "./views/CataloguePage";
import NavbarComponent from "./components/NavbarComponent";
import './index.css';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/catalogue">
          <CataloguePage />
        </Route>
        <Route path="*">
          <h1>404 Page not found</h1>
          <a href="/"> Go back </a>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
