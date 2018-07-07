import React from 'react';
import {BrowserRouter, Route, NavLink, Redirect} from 'react-router-dom';
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
import PrivateRouter from "./PrivateRouter";
import Login from "./Login";

export default (
    <BrowserRouter>
        <div>
            <div className="full-container">
                <nav className="navbar navbar-dark bg-primary">
                    <div className="col-md-4">
                        <div className="navbar-brand">
                            SBWIT BOOS管理系统
                        </div>
                    </div>
                    <div className="col-md-8">
                        <ul className="navbar-nav flex-row ">
                            <li className="mx-3">
                                <NavLink className="nav-link" activeClassName="active" to="/home">首页</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" activeClassName="active" to="/user">学员管理</NavLink>
                            </li>
                            <li className="mx-3">
                                <NavLink className="nav-link" activeClassName="active" to="/profile">个人设置</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="container mt-3">
                <Route path="/home" component={Home}/>
                <Route path="/user" component={User}/>
                <Route path="/login" component={Login}/>
                {/*<Route path="/profile" component={Profile}/>*/}
                <PrivateRouter path="/profile" component={Profile}/>
            </div>
        </div>
    </BrowserRouter>

)