const addClientReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_CLIENT':
        // add new client to array
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default addClientReducer;