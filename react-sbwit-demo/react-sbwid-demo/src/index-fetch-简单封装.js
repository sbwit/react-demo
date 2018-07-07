import React from 'react';
import ReactDOM from 'react-dom';

function fnFetch(url) {
    return fetch(url).then(res => {
        if (res.ok) {
            return res.json();
        }
    }).then(res => {
        return res;
    })
}

class App extends React.Component {

    state = {
        isLoading: false,
        data: null
    }


    fetchDate = async () => {
        let data = await  fnFetch('https://api.github.com/users/sbwit')
        console.log(data)
        this.setState({data});
    };

    render() {
        let {isLoading, data} = this.state;
        return (<div>
            <h2>原生fetch 交互</h2>
            <button onClick={this.fetchDate}>获取数据</button>

            <div>
                {
                    isLoading ? <strong>加载中.....</strong> :
                        <div>
                            {
                                data === null ? <strong>暂无数据.....</strong> :
                                    <ul>
                                        <li>名字：{data.name}</li>
                                        <li>公司网址：{data.blog}</li>
                                        <li>头像：
                                            <img src={data.avatar_url}/>
                                        </li>
                                    </ul>
                            }
                        </div>
                }

            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
