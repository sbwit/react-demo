import React from "react";
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import CrowdQuery from "./CrowdQuery";

export default class ActvityRoute extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path="/promo/crowd/query.htm/query" component={CrowdQuery}/>
                <Redirect path="/promo/crowd/query.htm" to="/promo/crowd/query.htm/query"></Redirect>
            </Switch>
        )
    }
}