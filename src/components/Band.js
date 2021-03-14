import React, { Component } from 'react';

class Band extends Component {

  handleClick = e => {
   this.props.deleteBand(this.props.id)
  }


  render() {
    return(
      <div>
        <li>{this.props.name}</li>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
};

export default Band;
