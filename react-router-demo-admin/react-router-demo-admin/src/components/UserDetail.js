import React from "react"

class UserDetail extends React.Component {


    render() {
        let {id} = this.props.match.params;
        console.log(id);
        let userStr = localStorage.getItem("users");
        let userArr = userStr ? JSON.parse(userStr) : [];
        console.log(userArr, id)
        let user = userArr.find((item) => item.id == id);
        console.log(user)
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item"><label>用户编号：{user.id}</label></li>
                    <li className="list-group-item"><label>用户姓名：{user.name}</label></li>
                    <li className="list-group-item"><label>用户年龄：{user.age}</label></li>
                    <li className="list-group-item"><label>手机号码：{user.tel}</label></li>
                </ul>
            </div>
        )
    }
}

export default UserDetail