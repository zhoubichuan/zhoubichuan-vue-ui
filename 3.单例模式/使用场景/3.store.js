function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }
  function subscribe(listener) {
    listener.push(listener);
    return () => {
      listener = listener.filer(item => item != listener);
      console.log(listener);
    };
  }
  dispatch({});
  return {
    getState,
    dispatch,
    subscribe
  };
}
let reducer = function() {
  console.log("reducer");
};
let store = createStore(reducer);
console.dir(store);
