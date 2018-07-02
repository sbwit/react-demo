import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Router} from 'react-router-dom';

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
            <li><a href="#/home">主页</a></li>
            <li><a href="#/about">关于</a></li>
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
