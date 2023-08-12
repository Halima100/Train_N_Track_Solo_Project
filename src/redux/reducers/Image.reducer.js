const imageReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_IMAGE':
        return action.payload;
      case 'UNSET_IMAGE':
        return {};
      default:
        return state;
    }
  };
  
  // image will be on the redux state at:
  // state.image
  export default imageReducer;