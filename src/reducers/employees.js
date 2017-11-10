import sortArray from '../helpers/Sort';

const initialState = {
    list: [],
    fetching: false,
    error: null
};


export default function employees(state = initialState, action){
    switch(action.type){
        case "FETCH_EMPLOYEES":
          return {...state, fetching: true}
        case "FETCH_EMPLOYEES_FULFILLED":
          return {list: action.payload, fetching: false, error: null}
          case "FETCH_EMPLOYEES_REJECTED":
          return {...state, fetching: false, error: true}

          case "EDIT_EMPLOYEE":
            {const list = state.list;
            const key = action.category;
            return {
                   list: list.map(item => item.id === action.id ? item[key] = action.text : item),
                   ...state
                 }}
          case "SORT_EMPLOYEES":
            const list = state.list;
            const { sortKey, dir} = action;
            return { list: sortArray(list, sortKey, dir), ...state}
          
        default:
          return state;
          break;  
    }
}

