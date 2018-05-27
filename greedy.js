let states = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];

let stations = {};
stations['one'] = ['id', 'nv', 'ut'];
stations['two'] = ['mt', 'wa', 'id'];
stations['three'] = ['or', 'nv', 'ca'];
stations['four'] = ['ca', 'az'];
stations['five'] = ['nv', 'ut'];


function greedy() {

  let finalStations = [];

  while(states.length){
    let bestStation = null;
    let statesCovered = [];
    for(let station in stations){
      let covered = getIntersection(states, stations[station]);
      if(covered.length > statesCovered.length) {
        bestStation = station;
        statesCovered = covered;
      }
    }
    states = getDifference(states, statesCovered);
    finalStations.push(bestStation)
  }
  return finalStations;
}

function getDifference(arr1, arr2){
  let obj = {};
  let result = [];
  arr1.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  arr2.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  for(let item in obj){
    if(obj[item] === 1) result.push(item);
  }
  return result;
}

function getIntersection(arr1, arr2) {
  let obj = {};
  let result = [];
  arr1.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  arr2.forEach((item)=>{
    obj[item] ? obj[item]++ : obj[item] = 1;
  })
  for(let item in obj){
    if(obj[item] > 1) result.push(item);
  }
  return result;
}

console.log(greedy());