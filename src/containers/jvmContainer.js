import { connect } from 'react-redux';
import JVMApp from '../jvm/JVMApp';

const mapStateToProps = (state) => ({
  heap: state.jvm.heap,
  threads: state.jvm.threads,
  constPool: state.jvm.constPool
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(JVMApp);
