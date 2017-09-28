const initialState = {
    list: [],
    fetching: false,
    error: null
};

export default function employess(state = initialState, action){
    switch(action.type){
        case "FETCH_EMPLOYEES":
          return {...state, fetching: true}
        case "FETCH_EMPLOYEES_FULFILLED":
          return {list: action.payload, fetching: false, error: null}
          case "FETCH_EMPLOYEES_REJECTED":
          return {...state, fetching: false, error: true}
        default:
          return state;
          break;  
    }
}

