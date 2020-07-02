import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props){
    super(props);

    this.state = {
      title:this.props.title,
      desc:this.props.desc
    }
    

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeDesc = this.handleChangeDesc.bind(this);
  }

  handleChange(event){
    console.log('handleChange');
    console.log(event.target);
    this.setState({title: event.target.value})
  }

  handleChangeDesc(event){
    console.log('handleChangeDesc');
    console.log(event.target);
    this.setState({desc: event.target.value})
  }

  handleSubmit(event){
    console.log('handleSubmit');
    this.props.onSubmititem(this.state.title, this.state.desc)
    this.setState({title: '', desc: ''})
    event.preventDefault();
  }

  render(){
    return(
      <article>
        <h2>Update</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          title:
          <input type="text" value={this.state.title} onChange={this.handleChange} />
        </label>
        <label>
          desc:
          <textarea type="text" value={this.state.desc} onChange={this.handleChangeDesc} />
        </label>
        <input type="submit" value="update"/>
        </form>
      </article>
    );
  }
}

export default UpdateContent;

