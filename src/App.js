import React, { Component } from 'react';
import './App.css'; //APP 이라는 녀석의 디자인
import TOC from "./components/TOC";
import Content from "./components/content";
import Subject from "./components/subject"; 

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup language."></Content>
      </div>
    );
  }
}

export default App;
