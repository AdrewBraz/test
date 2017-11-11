import axios from 'axios'

export function fetchData(url){
    return function(dispatch){
        dispatch({ type:"FETCH_DATA" })
        axios.get(url)
          .then((res) => dispatch({ type: "FETCH_DATA_FULFILLED", payload: res.data}))  
          .catch((err) => dispatch({ type: "FETCH_DATA_REJECTED", payload: err }))
        }
}

export function editData(id, text, category){
    return { type: "EDIT_DATA", id, text, category }
}

export function sortData(sortKey, sortDir){
    return { type: "SORT_DATA", sortKey, sortDir }
}

export function filterData(text){
    return { type: "FILTER_DATA", text }
}