import React from "react"
import {Link} from "react-router-dom"

class UserList extends React.Component {
    state = {
        userList: []
    }

    //在组件挂载前获取数据
    componentWillMount() {
        console.log(111)
        //从缓存中获取数据
        let userStr = localStorage.getItem("users");
        let userArr = userStr ? JSON.parse(userStr) : [];
        this.setState({userList: userArr})
    }

    deleteUser = (userId, ev) => {
        let userStr = localStorage.getItem("users");
        let oldUser = userStr ? JSON.parse(userStr) : [];
        let userArr = oldUser.filter((item) => item.id !== userId);
        localStorage.setItem("users", JSON.stringify(userArr));
        this.setState({userList: userArr});
        ev.preventDefault();
    }

    render() {
        let {userList} = this.state;
        console.log(userList)
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>用户编号</th>
                        <th>名字</th>
                        <th>年龄</th>
                        <th>手机号码</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        userList.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>< Link to={`/user/detail/${item.id}`}> {item.name} </Link></td>
                                <td>{item.age}</td>
                                <td>{item.tel}</td>
                                <td>
                                    <button className="btn btn-primary" onClick={(ev) => {
                                        this.deleteUser(item.id, ev)
                                    }}>删除
                                    </button>
                                </td>
                            </tr>

                        ))
                    }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserList