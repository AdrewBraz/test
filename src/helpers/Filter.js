export default function filterArray(arr, text = ''){
  return arr.filter( item => {
    const list = Object.values(item);
    for(let i = 0; i < list.length; i++){
      const val = (list[i]).toString().toLowerCase();
      if(val.indexOf(text) !== -1) {
        return item
      };
    }
  })
};