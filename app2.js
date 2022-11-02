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
import CountryDetails from "./client /src/CountryDetails.js";


function App() {
    return (
        <>
            <Router>
                {/* <Switch> */}
                <Route exact path="/" component={App} />
                <Route path="/Flags" component={Flags} />
                <Route path="/Flags/:id" element={<Flags />} />
                <Redirect to="/" />
                {/* </Switch> */}
            </Router>
        </>
    );
}

export default App;
