import React, {Component, createContext} from 'react';
import ReactDOM from 'react-dom';

let {Provider, Consumer} = createContext();

/*

Context API :
    状态提供者：  Provider
    状态消费者： Consumer

*/


//统一状态管理
class ProviderComponent extends Component {
    render() {
        return (
            <Provider value={{a: "左胖子", b: "胖肚子"}}>
                {this.props.children}
            </Provider>
        )
    }
}

class Chlid extends Component {
    render() {
        return (<div>
            <Consumer>
                {(value) => (<h3>{JSON.stringify(value)}</h3>)}
            </Consumer>
        </div>)
    }
}

class App extends Component {

    render() {
        return (<div>
                <Chlid> </Chlid>
            </div>
        )
    }
}

ReactDOM.render(
    <ProviderComponent>
        < App/>
    </ProviderComponent>
    , document.querySelector("#root"));
