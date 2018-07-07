import React from "react";
import auth from '../auth';

class Login extends React.Component {
    state = {
        isRedirectBack: false
    }
    login = () => {
        auth.authLogin(() => {
            this.setState({
                isRedirectBack: true
            })
        })
    }

    render() {

        console.log(this.props.location)
        //如果this.props.location 为空，模拟form
        let {from} = this.props.location || {from: {pathname: "/home"}}; //获取到来源（referer）

        let {isRedirectBack} = this.state;
        if (isRedirectBack) {
            
        }
        return (<div>
            <h3>请您登录：</h3>
            <button className="btn btn-primary" onClick={this.login}></button>
        </div>);
    }
}

export default Login;