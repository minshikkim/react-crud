import React, { Component } from 'react';

class Controller extends Component{
  render(){
    return(
      <ul>
          <li>
            <a 
              href="/create" 
              onClick={function(mode, e){
                e.preventDefault();
                this.props.onChangeMode(mode);
              }.bind(this, "create")}>
                create
            </a>
          </li>
          <li><input type="button" value="delete" onClick={function(e){
            e.preventDefault();
            this.props.onDeleteItem();
          }.bind(this)}></input></li>
      </ul>
    );
  }
}

export default Controller;