import React from 'react';
import ReactDOM from 'react-dom';

//高阶组件
fnHOC = (MyCom) => {
    return class Mid extends React.Component {
        render() {
            return (
                <div>
                    <MyCom name="welCome" title="suzhou">
                        <strong>SBWIT React Js Study</strong>
                    </MyCom>
                </div>
            )
        }
    }
}
let NewComponent = fnHOC(Basic);

class Basic extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.name}</h1>
                <h1> {this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (<div>
                <NewComponent/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>
    , document.querySelector("#root"));
