import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import Form from "./components/form";
import About from "./components/about";
import Navbar from "./components/nav-bar";

function App() {
    return (
        <div className="body">
            <Router>
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/form">
                        <Form />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
