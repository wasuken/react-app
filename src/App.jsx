import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let data = {title: 'title',
            message: 'this is sample message'};

const SampleContext = React.createContext(data);

class App extends Component{
    newdata = {title: '新しいタイトル',
               message: 'これは新しいメッセージです。'}
    render(){
        return (
            <div>
              <h1>Context</h1>
              <Title />
              <Message />
              <SampleContext.Provider value={this.newdata}>
                <Title />
                <Message />
              </SampleContext.Provider>
            </div>
        );
    }
}

class Title extends Component{
    static contextType = SampleContext;
    render(){
        return(
            <h2>{this.context.title}</h2>
        );
    }
}

class Message extends Component{
    static contextType = SampleContext;
    render(){
        return(
            <p>{this.context.message}</p>
        );
    }
}
export default App;
