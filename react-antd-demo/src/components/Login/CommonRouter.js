import React from "react";
import { Route, NavLink, Switch, Redirect} from 'react-router-dom';
import UserQuery from "../user/UserQuery"
import PermissionQuery from "../user/PermissionQuery"
import RoleQuery from "../user/RoleQuery"
import NotFound from "../NotFound"
import ActivityRoute from "../promo/activity/ActivityRoute"
import CrowdRoute from "../promo/crowd/CrowdRoute"
import TemplateRoute from "../promo/template/TemplateRoute"

export default class CommonRouter extends React.Component{
    render(){
        return (<div>
            <Switch>
                <Route path="/user/query" component={UserQuery}/>
                <Route path="/user/permission" component={PermissionQuery}/>
                <Route path="/user/role" component={RoleQuery}/>
                <Route path="/promo/actvity/query.htm" component={ActivityRoute}/>
                <Route path="/promo/crowd/query.htm" component={CrowdRoute}/>
                <Route path="/promo/template/query.htm" component={TemplateRoute}/>
                <Route component={NotFound}/>
            </Switch></div>)
    }
}