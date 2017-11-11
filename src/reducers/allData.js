import sortArray from '../helpers/Sort';
import filterArray from '../helpers/Filter';

const initialState = {
    data: [],
    fetching: false,
    error: null,
    filtered: []
};


export default function allData(state = initialState, action){
    switch(action.type){
        case "FETCH_filtered":
          return {...state, fetching: true}

        case "FETCH_DATA_FULFILLED":

          return {data: action.payload, filtered: action.payload, fetching: false, error: null}
        case "FETCH_DATA_REJECTED":

          return {...state, fetching: false, error: true}

        case "EDIT_DATA":
          {
            const data = state.data;
            const key = action.category;
            return {
                      data: data.map(item => item.id === action.id ? item[key] = action.text : item),
                      ...state
                   }
          }

        case "SORT_DATA":
          {
            const filtered = filterArray(state.filtered);
            const { sortKey, sortDir} = action;
            const arr = sortArray(filtered, sortKey, sortDir);
            console.log(arr)
            return { ...state, filtered: arr}
            }
        case "FILTER_DATA":
          {
            const data = state.data;
            const { text } = action;
            const arr = filterArray(data, text)
            return { ...state, filtered: arr}
          }
          
        default:
          return state;
    }
}

