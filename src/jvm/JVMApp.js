import React, { Component } from 'react';
import JVM from './components/JVM';
import ByteCode from './components/ByteCode';

class JVMApp extends Component {
  render() {
    return (
      <div style={{margin: 0, padding: 0, width:"100%"}}>
        <div className="col-md-3">
          <ByteCode />
        </div>

        <div className="col-md-9">
          <JVM />
        </div>
      </div>
    );
  }
}

export default JVMApp;
