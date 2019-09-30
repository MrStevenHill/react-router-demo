import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Nav from "./Nav";
import Stuff from "./pages/Stuff";
import Things from "./pages/Things";
import Home from "./pages/Home";

const AppContainer = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <h1>React Router Demo</h1>
        <Nav />
        <Switch>
          <Route path="/stuff">
            <Stuff />
          </Route>
          <Route path="/things">
            <Things />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
