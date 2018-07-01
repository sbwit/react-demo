import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    handleClick = () => {
        alert(1);
    }

    render() {
        return (<button onClick={this.handleClick}>welcome</button>)
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
