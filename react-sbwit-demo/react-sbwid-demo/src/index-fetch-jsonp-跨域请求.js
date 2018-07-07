import React from 'react';
import ReactDOM from 'react-dom';
import fetchJsonp from 'fetch-jsonp';

/*
跨域JSONP请求  fetch-jsonp:
    1. cnpm i fetch-jsonp -d
    2. 使用：import fetchJsonp from 'fetch-jsonp';

*/

function MyFetchJsonp(url, options) {
    return fetchJsonp(url, options).then(res => {
        return res.json();
    }).then(data => {
        return data;
    })
}

class App extends React.Component {

    state = {
        isLoading: false,
        data: []
    }


    fetchDate = async () => {

        let {s} = await MyFetchJsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=sbwit', {jsonpCallback: 'cb'});
        console.log(s)
        this.setState({
            data: s
        });
    };

    render() {
        let {isLoading, data} = this.state;
        return (<div>
            <h2>fetch-jsonp跨域取数据</h2>
            <button onClick={this.fetchDate}>获取数据</button>

            <div>
                {
                    isLoading ? <strong>加载中.....</strong> :
                        <div>
                            {
                                data.length === 0 ? <strong>暂无数据.....</strong> :
                                    <ul>
                                        {
                                            data.map((val, index) => {
                                                return <li key={index}>{val}</li>
                                            })
                                        }
                                    </ul>
                            }
                        </div>
                }

            </div>
        </div>)
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"));
