import React from "react"
import {Route, Switch} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={About}></Route>
                    <Route exact path="/#contact" component={Contact}></Route>
                </Switch>
            </div>
        );
    }
}

export default Routes;