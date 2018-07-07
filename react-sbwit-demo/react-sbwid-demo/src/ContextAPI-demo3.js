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
    state = {a: "左胖子", b: "胖肚子"};

    changeDate = (data) => {
        this.setState(data);
    }

    render() {
        return (
            <Provider value={{state: this.state, onChangeDate: this.changeDate}}>
                {this.props.children}
            </Provider>
        )
    }
}

class Chlid extends Component {
    render() {
        return (<div>
            <Consumer>
                {
                    (data) => (
                        <div>
                            <h3>测试ContextAPI</h3>
                            <h3>{JSON.stringify(data.state)}</h3>

                            <button onClick={() => data.onChangeDate({a: "大左胖子", b: "只胖肚子"})}> 更改</button>
                        </div>
                    )
                }
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

class App2 extends Component {

    render() {
        return (<div>
                <Consumer>
                    {
                        (data) => (<h3>{JSON.stringify(data.state)}</h3>)

                    }
                </Consumer>
            </div>
        )
    }
}

ReactDOM.render(
    <ProviderComponent>
        < App/>
        < App2/>
    </ProviderComponent>
    , document.querySelector("#root"));
