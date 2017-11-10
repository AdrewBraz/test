export default function sortArray(arr, sortKey, sortDir){
  return arr.sort((a, b) => {
    let val;
    if(a[sortKey] > b[sortKey]){
      val = 1;
    }
    if(a[sortKey] < b[sortKey]){
      val = -1;
    }
    if(sortDir === "DESC"){
      val = val * -1
    }
    return val
  })
}