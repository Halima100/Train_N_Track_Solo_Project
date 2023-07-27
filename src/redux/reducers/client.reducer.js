const clientReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_CLIENT':
        return action.payload;
      case 'UNSET_CLIENT':
        return {};
      default:
        return state;
    }
  };
  
  // client will be on the redux state at:
  // state.client
  export default clientReducer;