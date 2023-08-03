const updateClientReducer = (state = {}, action) => {
    switch (action.type) {
      case 'UPDATE_CLIENT':
        return action.payload;
      default:
        return state;
    }
  };

  export default updateClientReducer;