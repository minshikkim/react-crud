import React, { Component } from 'react';
import './App.css'; //APP 이라는 녀석의 디자인
import TOC from "./components/TOC";
import Readcontent from "./components/Readcontent";
import Subject from "./components/subject"; 
import Controller from './components/control';
import CreateContent from './components/createContent';
import UpdateContent from './components/updateContent';

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

    this.handleCreate = this.handleCreate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmitUpdate = this.handleSubmitUpdate.bind(this);
  }

  
  handleCreate(_title, _desc){
    var _contents = [];
    _contents = this.state.contents.slice();
    var lastId = _contents.length;
    _contents.push(
      {id: lastId+1, title: _title, desc: _desc}
    )
    this.setState({
      mode: 'read',
      contents: _contents,
      selected_content_id: _contents.length
    })
  }

  handleDelete(e) {
    var _contents = [];
    _contents = this.state.contents.slice();
    _contents.splice(this.state.selected_content_id-1, 1);
    this.setState({
      contents: _contents
    })
  }

  handleUpdate(id){
    // change mode to update and selected_content_id to id
    var _content = this.state.contents[id-1];
    console.log(id)
    console.log(_content) 

    this.setState({
      mode:'update',
      selected_content_id: id
    })
  }

  handleSubmitUpdate(_title, _desc){
    console.log(`title : ${_title} \n desc : ${_desc}`);
    var _contents = this.state.contents.slice();
    console.log(_contents);
    var index = this.state.selected_content_id;

    _contents.splice(index-1, 1,
        { id: index,
        title: _title,
        desc: _desc});
    this.setState({
      mode: 'read',
      contents: _contents
    })
  }
  

  render(){
    console.log('App render');
    var _title, _desc = null;
    var mode = this.state.mode;
    var components;
    

    switch (this.state.mode) {
      case 'welcome':
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        components = <Readcontent title={_title} desc={_desc}></Readcontent>
        break;
      case 'read':
        var i = 0;
        while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          components = <Readcontent title={_title} desc={_desc}></Readcontent>
          break;
        }
        i = i+1;
      }
        break;
      case 'create':
        var lastId = this.state.contents.length;
        components = <CreateContent onCreate={this.handleCreate}/>
        break;
      case 'update':
        var id = this.state.selected_content_id;
        var _title = this.state.contents[id-1].title; 
        var _desc = this.state.contents[id-1].desc;
        components = <UpdateContent title={_title} desc={_desc} onSubmititem={this.handleSubmitUpdate}/>
      default:
        break;
    }

    // if(this.state.mode === 'welcome'){
    //   _title = this.state.welcome.title;
    //   _desc = this.state.welcome.desc;
    // }else if(this.state.mode === 'read'){
    
    // }else if(this.state.m)

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
            this.setState({
              mode:'read',
              selected_content_id:Number(id)
            })
          }.bind(this)} 
          onUpdateItem={this.handleUpdate}
        ></TOC>
        <Controller onChangeMode={function(_mode){
          console.log(_mode);
          this.setState({
            mode:_mode
          })
        }.bind(this)} onDeleteItem={this.handleDelete}>
        </Controller>
        <div>{components}</div>
        {/* <Readcontent title={_title} desc={_desc}></Readcontent> */}
      </div>
    );
  }
}

export default App;
