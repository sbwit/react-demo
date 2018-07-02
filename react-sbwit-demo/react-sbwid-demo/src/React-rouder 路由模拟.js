import React from 'react';
import ReactDOM from 'react-dom';

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

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hash: window.location.hash.substring(1)}
    }

    render() {

        let RouterView = null;
        switch (this.state.hash) {
            case "/home":
                console.log(11111)
                RouterView = <Home/>;
                break;
            case "/about":
                console.log(11111)
                RouterView = <About/>;
                break;
            default :
                RouterView = <Home/>
                break;
        }

        return (<div>

        </div>)
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
