const initialState = {
    list: [],
    fetching: false,
    error: null
};

export default function Departments(state = initialState, action){
    switch(action.type){
        case "FETCH_DEPARTMENTS":
          return {...state, fetching: true}
          break;
        case "FETCH_DEPARTMENTS_FULFILLED":
          return {list: action.payload, fetching: false, error: null}
          break;
        case "FETCH_DEPARTMENTS_REJECTED":
          return {...state, fetching: false, error: true}
          break;
        case "EDIT_DEPARTMENT":
          return {...state,
                   list: list.map((item) => item.id === action.id ? item.text = action.text : item)
                 }
        default:
          return state;
          break;  
    }
}