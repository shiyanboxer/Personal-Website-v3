import React from "react"
import {Route, Switch} from "react-router-dom"
import About from "./sections/About";
import Contact from "./sections/Contact";

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