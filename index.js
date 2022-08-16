// code your solution here
function saturdayFun(fun){
  if(fun== null){
    return "This Saturday, I want to roller-skate!";
  }else{
    return `This Saturday, I want to ${fun}!`
  }
}
function mondayWork(work){
  return work == null? "This Monday, I will go to the office.": `This Monday, I will ${work}.`;
}
function wrapAdjective(adjective){
 return function(string){
    return `You are ${adjective}${string}${adjective}!`
 }
}

