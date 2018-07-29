import React from "react";
import {BrowserRouter, Route, NavLink, Switch, Redirect} from 'react-router-dom';
import TemplateQuery from "./TemplateQuery";
import templateDetail from "./TemplateDetail";

export default class ActvityRoute extends React.Component{

    render(){
        return (
            <Switch>
                <Route exact path="/promo/template/query.htm/query" component={TemplateQuery}/>
                <Route exact path="/promo/template/query.htm/detail" component={templateDetail}/>
                <Redirect path="/promo/template/query.htm" to="/promo/template/query.htm/query"></Redirect>
            </Switch>
        )
    }
}