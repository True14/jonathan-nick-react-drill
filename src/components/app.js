import React from 'react';
import Output from './output';
import Input from './input';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      list: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

 handleSubmit(e) {
  e.preventDefault();
  this.setState({list: [...this.state.list, this.state.value], value: ''});
  // console.log(this.state.list);
 }

 handleChange(value) {
  //  console.log(this);
   this.setState({value: value});
 }
  render() {
   return (
     <div className="app">
       <Input value={this.state.value} onSubmit={this.handleSubmit} onChange={this.handleChange} />
       <Output strings={this.state.list.sort()} />
     </div>
   );
  }
}
