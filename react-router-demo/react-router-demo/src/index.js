import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';
import uuid from "uuid";
const stuData = {
    stuList:[
        {id:uuid(),name:"张三",sex:"男",tel:"1234566778"},
        {id:uuid(),name:"李四",sex:"男",tel:"1334566778"},
        {id:uuid(),name:"王五",sex:"女",tel:"1434566778"},
        {id:uuid(),name:"赵六",sex:"男",tel:"1534566778"},
        {id:uuid(),name:"牛七",sex:"女",tel:"1634566778"},

    ]
}


const About = () => (
    <div>
        <h3>关于我们</h3>
    </div>
);
const Home = () => (
    <div>
        <h3>关于SBWIT</h3>
    </div>
);

const Stu = () => (
    <div>
        <h3>学生信息</h3>
    </div>
);

const Header = () => (
    <div>
        <h3> React-Router 路由</h3>
        <ul>
            <li><Link  to="/">主页</Link></li>
            <li><Link to="/about">关于</Link></li>
            <li><Link to="/stu">学生</Link></li>
        </ul>
    </div>
)

const Main = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/stu" component={Stu}/>
        </Switch>
    </div>
);

class App extends React.Component {
    render() {
        return (<div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.querySelector("#root"));
