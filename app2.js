import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from "react-router-dom";


import App from "./src/App.js";
import Flags from "./src/Flags.js";
import CountryDetails from "./project2-frontend/src/CountryDetails.js";


function App() {
    return (
        <>
            {/* This is the alias of BrowserRouter i.e. Router */}
            <Router>
                <Switch>
                    {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
                    <Route exact path="/" component={App} />

                    {/* This route is for about component 
            with exact path "/about", in component 
            props we passes the imported component*/}
                    <Route path="/Flags" component={Flags} />

                    <Route path="/Flags/:id" component={Flags} />
                    {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" */}
                    <Redirect to="/" />
                </Switch>
            </Router>
        </>
    );
}

export default App;
