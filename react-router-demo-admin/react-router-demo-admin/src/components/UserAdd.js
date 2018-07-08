import React from "react"
import uuid from "uuid";
import {Prompt} from "react-router-dom";

class UserAdd extends React.Component {
    state = {
        ispromt: false
    }
    handleSubmit = (ev) => {
        let name = this.nameInput.value;
        let age = this.ageInput.value;
        let tel = this.telInput.value;
        //存在缓存中 （localStorage）
        let userStr = localStorage.getItem('users');
        let userArr = userStr ? JSON.parse(userStr) : [];
        userArr.push({
            id: uuid(),
            name,
            age,
            tel,

        });
        localStorage.setItem("users", JSON.stringify(userArr));
        this.nameInput.value = "";
        this.ageInput.value = "";
        this.telInput.value = "";
        //跳转到用户列表
        this.props.history.push("/user/list")
        ev.preventDefault();
    }
    handleChangePrompt = (ev) => {
        let value = ev.target.value;
        this.setState({isPrompt: value.length > 0});
    }

    render() {
        return (
            <div>
                <Prompt
                    when={this.state.isPrompt}
                    message={location => `你确定需要跳转到${location.pathname}吗？`}
                />
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleChangePrompt} type="text" ref={input => this.nameInput = input}
                               className="form-control"
                               placeholder="请输入姓名"/>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleChangePrompt} type="number" ref={input => this.ageInput = input}
                               className="form-control"
                               placeholder="请输入年龄"/>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleChangePrompt} type="number" ref={input => this.telInput = input}
                               className="form-control"
                               placeholder="请输入电话"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">提交</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserAdd