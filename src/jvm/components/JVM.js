import React, { Component } from 'react';
import MethodArea from './MethodArea';
import RuntimeConstantPool from './RuntimeConstantPool';
import Heap from './Heap';
import Thread from './Thread';

class JVM extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">the Java Virtual Machine:</h5>
          <div className="card-body">
            <MethodArea />
            <RuntimeConstantPool />
            <Heap />
            <Thread />
          </div>
        </div>
      </div>
    );
  }
}

export default JVM;
