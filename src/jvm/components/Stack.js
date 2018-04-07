import React, { Component } from 'react';
import Frame from './Frame';

class Stack extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="jvm-stack card">
        <div className="card-body">
          <h5 className="card-title">Stack</h5>
          <div className="card-text">
            <Frame key="0x2ab1" />
            <Frame key="0x031f"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Stack;
