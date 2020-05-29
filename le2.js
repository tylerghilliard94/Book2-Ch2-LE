const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)
console.log(empireStateBuilding.stories)

var key1 = "architect";
var key2 = "address";
var key3 = "constructionDate";
var key4 = "cost";
var key5 = "owner";

console.log(empireStateBuilding[key1])
console.log(empireStateBuilding[key2])
console.log(empireStateBuilding[key3])
console.log(empireStateBuilding[key4])
console.log(empireStateBuilding[key5])