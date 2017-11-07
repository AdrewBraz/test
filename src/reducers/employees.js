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

          case "EDIT_EMPLOYEE":
          return {...state,
                   list: list.map((item) => item.id === action.id ? item.text = action.text : item)
                 }
        default:
          return state;
          break;  
    }
}

