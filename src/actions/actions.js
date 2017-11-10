import axios from 'axios'

export function fetchEmployees(){
    return function(dispatch){
        dispatch({type:"FETCH_EMPLOYEES"})
        axios.get('/employees')
          .then((res) => dispatch({ type: "FETCH_EMPLOYEES_FULFILLED", payload: res.data}))  
          .catch((err) => dispatch({ type: "FETCH_EMPLOYEES_REJECTED", payload: err }))
        }
}

export function fetchDepartments(){
    return function(dispatch){
        dispatch({ type: "FETCH_DEPARTMENTS"})
        axios.get('/departments')
          .then((res) => dispatch({ type: "FETCH_DEPARTMENTS_FULFILLED", payload: res.data}))
          .catch((err) => dispatch({ type: "FETCH_DEPARTMENTS_REJECTED", payload: err}))
    }
}

export function editDepartment(id, text, category){
    return {type: "EDIT_DEPARTMENT", id, text, category}
}


export function editEmployee(id, text, category){
    return {type: "EDIT_EMPLOYEE", id, text, category}
}

export function sortEmployees(sortKey, sortDir){
    return {type: "SORT_EMPLOYEES", sortKey, sortDir}
}

export function sortDepartments(sortKey, sortDir){
    return {type: "SORT_DEPARTMENTS", sortKey, sortDir}
}