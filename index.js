// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
  //...
];




function superbowlWin(record) {
    function hasAWin(element, index, array) {
        return (element.result === `W`)
    }
    let superbowlWin = record.find(hasAWin)
    console.log(superbowlWin)

    if (typeof superbowlWin === "object"){
    return superbowlWin.year 
} else {
    return undefined
}
    
}
