import React from "react"
import {Route, NavLink, Switch, Redirect} from "react-router-dom"
import UserAdd from './UserAdd'
import UserList from './UserList'
import UserDetail from './UserDetail'

class User extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-3">
                    <div className="nav flex-column text-center">
                        <li className="nav-item ">
                            <NavLink to="/user/list" className="nav-link"
                                     activeClassName="bg-primary text-light">用户列表</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/user/add" className="nav-link"
                                     activeClassName="bg-primary text-light">新增用户</NavLink>
                        </li>
                    </div>
                </div>
                <div className="col-9">
                    <Switch>
                        <Route path="/user/list" component={UserList}/>
                        <Route path="/user/add" component={UserAdd}/>
                        <Route path="/user/detail/:id" component={UserDetail}/>
                        <Redirect path="/user" to="/user/list"></Redirect>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default User