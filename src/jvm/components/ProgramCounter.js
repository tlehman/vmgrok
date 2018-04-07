import React, { Component } from 'react';

class ProgramCounter extends Component {
  render() {
    return (
      <div className="jvm-pc">
        <h5>Program counter</h5> {this.props.pc}
      </div>
    );
  }
}

export default ProgramCounter;
