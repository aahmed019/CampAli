import React from "react";
import { Route, Switch } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route.util";
import Home from "./home";
import LoginFormContainer from "./sessions/login_form_container"
import NavBarContainer from "./sessions/Nav/navbar_container";
import SignupFormContainer from "./sessions/signup_form_container"
import Modal from './modal/modal'
import LocationsIndexContainer from "./locations/locations_index_container";
import LocationShowContainer from "./locations/location_show_container";


const App = () => (
    <div>
        <Modal/>
        <Route path ="/" component={NavBarContainer}/>
        <ProtectedRoute path= "/" component={Home}/>

        <h1 style={{paddingTop:'150px'}}>Hello there I am a h1 tag</h1>

        <Switch>
            <Route exact path="/" component={LocationsIndexContainer} />
            <Route exact path="/locations/:locationId" component={LocationShowContainer} />
        </Switch>

    </div>
  );
  
  export default App;