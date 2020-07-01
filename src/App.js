import React, { Component } from 'react';
import './App.css'; //APP 이라는 녀석의 디자인
import TOC from "./components/TOC";
import Content from "./components/content";
import Subject from "./components/subject"; 
import Controller from './components/control';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'read',
      selected_content_id:1,
      subject:{title:'web', sub:'world wide web'},
      welcome:{title:'welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML IS HyperText ...'},
        {id:2, title:'css', desc:'css is cascading style sheet ...'},
        {id:3, title:'javascript', desc:'javascript is .. '}
      ]
    }
  }

  handleClick(){
    this.setState({mode:'welcome'})
  }
  
  

  render(){
    console.log('App render');
    var _title, _desc = null;

    if(this.state.mode === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i+1;
      }
    }

    console.log('render', this)
    return(
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            this.setState({mode: 'welcome'})
          }.bind(this)}
          >
          </Subject>
        <TOC 
          data={this.state.contents}
          onChangePage={function(id){
            // debugger;
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            })
          }.bind(this)}
        ></TOC>
        <Controller></Controller>
        
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
