import React from "react";
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import ActivityQuery from "./ActivityQuery";
import ActivityCreate from "./ActivityCreate";
import ActivityDetail from "./ActivityDetail";

export default class ActvityRoute extends React.Component{

    render(){
        return (
            <Switch>
                <Route path="/promo/actvity/query.htm/query" component={ActivityQuery}/> 
                <Route path="/promo/actvity/query.htm/create" component={ActivityCreate}/>   
                <Route path="/promo/actvity/query.htm/detail" component={ActivityDetail}/> 
                <Redirect path="/promo/actvity/query.htm" to="/promo/actvity/query.htm/query"></Redirect>
            </Switch>
        )
    }
}