import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Link} from 'react-router-dom';

const About = () => (
    <div>
        <h3>关于我们</h3>
    </div>
);
const Home = () => (
    <div>
        <h3>关于首页</h3>
    </div>
)

const Header = () => (
    <div>
        <h3> React-Rouder 路由</h3>
        <ul>
            <li><Link to="#/home">主页</Link></li>
            <li><Link to="#/about">关于</Link></li>
        </ul>
    </div>
)

const Main = () => (
    <div>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={About}/>
    </div>
);

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (<div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>
    , document.querySelector("#root"));