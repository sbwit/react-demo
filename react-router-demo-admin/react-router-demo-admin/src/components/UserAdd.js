import React from "react"
import uuid from "uuid";

class UserAdd extends React.Component {

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

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" ref={input => this.nameInput = input} className="form-control"
                               placeholder="请输入姓名"/>
                    </div>
                    <div className="form-group">
                        <input type="number" ref={input => this.ageInput = input} className="form-control"
                               placeholder="请输入年龄"/>
                    </div>
                    <div className="form-group">
                        <input type="number" ref={input => this.telInput = input} className="form-control"
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