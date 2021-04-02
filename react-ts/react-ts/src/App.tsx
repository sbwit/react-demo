import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppTest from './AppTest'

class App extends Component<any,any>{
    render() {
      return (<div>
        <h1>App 首页</h1>
        <AppTest/>
      </div>)
    }
}

export default App;
