import React, { Component } from 'react';
import ProgramCounter from './ProgramCounter';
import Stack from './Stack';

class Thread extends Component {
  render() {
    return (
      <div>
        <div className="jvm-thread card">
          <div className="card-body">
            <h5 className="card-title">Thread #0</h5>
            <div className="card-text">
              <ProgramCounter className="program-counter" pc={0} />
              <Stack />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Thread;
