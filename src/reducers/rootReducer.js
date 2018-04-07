const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'JVM_NOP':
      return Object.assign({}, state, {
          jvm: {
            threads: [1, 2]
          }
      }
      );
    default:
      return state;
  }
};

const initialState = {
  jvm: {
    heap: [],
    threads: [],
    constPool: {}
  }
}

export default rootReducer;
