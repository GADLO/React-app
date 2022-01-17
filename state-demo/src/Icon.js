import React, { Component } from "react";

class Icon extends Component {
    static defaultProps ={
        options:[
            'cat',
            'dog',
            'angry',
            'fish',
            'laugh-wink'
        ]
    }
  constructor(props) {
    super(props);
    this.state = { icons:['dog','cat','fish','pig'] };
    this.addIcon = this.addIcon.bind(this);
 
  }
  addIcon(){
    let idx = Math.floor(Math.random() * this.props.options.length)
    let newIcon = this.props.options[idx]
    console.log(this.state.icons)
    let icons = this.state.icons
    icons.push(this.props.options[idx])
    this.setState({icons:icons})
  }
 
  render() {
      const icons = this.state.icons.map(i=><i className={`fas fa-${i}`}/>)
    return (
      <div>
        <h1>Icon Component</h1>
        <h2>Icon</h2>
        <h3>{icons}</h3>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    );
  }
}

export default Icon;
