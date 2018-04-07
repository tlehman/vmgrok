import React, {Component} from 'react';

class ByteCode extends Component {
  render() {
    return (
      <div className="jvm-bytecode card">
        <div className="card-body">
          <h5 className="card-title">JVM Bytecode</h5>
          <div className="card-body">
            <pre>
0: iconst_2
1: iconst_3
2: invokestatic  #2                  // Method add:(II)I
5: istore_1
6: return

0: iload_0
1: iload_1
2: iadd
3: ireturn
            </pre>
          </div>
        </div>
      </div>
    );
  }
}

export default ByteCode;
