const workoutReducer = (state = {}, action) => {
    switch (action.type) {
      case 'SET_WORKOUT':
        return action.payload;
      case 'UNSET_WORKOUT':
        return {};
      default:
        return state;
    }
  };
  
  // client will be on the redux state at:
  // state.client
  export default workoutReducer;