// Code your solution here
function findMatching(drivers ,string ){
  let Matched = drivers.filter(item=>{
    return item.toUpperCase() == string.toUpperCase();
  })
  return Matched;
}

function fuzzyMatch(drivers ,string){
  let Matched = drivers.filter(item=>{
    return item.startsWith(string);
  })
  return Matched;
}

function matchName(drivers ,string){
  let Matched = drivers.filter(item=>{
    return item.name==string;
  })
  return Matched;
}