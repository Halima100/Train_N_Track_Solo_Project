const addWorkoutReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_WORKOUT':
        // add new workout to array
        return [...state, action.payload];
      default:
        return state;
    }
  };
  
  export default addWorkoutReducer;