import React from "react";
import {withRouter} from "react-router-dom";
import auth from "../auth";

export default withRouter((props) => {
    console.log("TipButton", props);
    let {history} = props
    return (
        auth.isAuth ? (<p className="text-center mt-2">
            欢迎管理员回来！
            <button className="btn btn-link" onClick={() => {
                auth.authLogout(() => {
                    history.push("/home")
                })
            }}> 退出登录</button>
        </p>) : (
            <p className="text-center mt-2">
                你未登录.只能访问部分页面!
            </p>
        )
    )
})