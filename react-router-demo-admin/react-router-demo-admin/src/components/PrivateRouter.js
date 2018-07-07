import React from "react";
import auth from "../auth";
import {Route, Redirect} from "react-router-dom";

class PrivateRouter extends React.Component {
    render() {
        let {component: Component, ...rest} = this.props;
        return (
            <Route {...rest} render={(props) => (
                // auth.isAuth判断是否登录 ，如果true： 跳转父类传过来的组件 如果false 跳转到登录组件
                auth.isAuth ? <Component {...props}/> :
                    <Redirect to={{
                        pathname: "/login",  //跳转到登录页面
                        state: {from: props.location} //from 当前路径，方便跳转回来
                    }}/>
            )}/>
        )
    }
}

export default PrivateRouter;