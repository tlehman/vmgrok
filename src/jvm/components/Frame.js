import React, { Component } from 'react';

class Frame extends Component {
  render() {
    return (
      <div className="jvm-frame card">
        <div className="card-body">
          <h5 className="card-title">Frame</h5>
          <div className="card-text">
            <div className="row">
              <div className="col-sm-4">local variable array
                <table border="1">
                  <thead>
                    <tr>
                      <th>0</th><th>1</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="col-sm-4">op stack</div>
              <div className="col-sm-4">ref to runtime const pool</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Frame;
