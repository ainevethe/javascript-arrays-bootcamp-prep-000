
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, beginning) {
  var newarray = [beginning, ...array]
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, beginning) {
  array.unshift(beginning)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  var newarray = array.push(element)
  return newarray
}

function accessElementInArray() {

}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}

function removeElementFromEndOfArray() {

}
