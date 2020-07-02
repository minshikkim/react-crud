import React, { Component } from 'react';

class TOC extends Component{
  constructor(props){
    super(props);


  }


    

  render(){
    console.log('TOC render');
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
          lists.push(
            <li key={data[i].id}>
              <a 
                href={"/content/" + data[i].id}
                data-id={data[i].id}
                onClick={function(id, e){
                  console.log(e.target);
                  // debugger;
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}

              >{data[i].title}</a>
              <input 
                type="button"
                value="update"
                onClick={function(id, e){
                  e.preventDefault();
                  console.log(id)
                  this.props.onUpdateItem(id);
                }.bind(this, data[i].id)}/>
            </li>);
            i = i + 1;
      }
    return(
      <nav>
        <ul>
            {lists}
        </ul>
      </nav>
    );
  }
}

export default TOC; // TOC 라 클래스를 가져다 쓸 수 있도록 export 한다 .