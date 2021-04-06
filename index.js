// Code your solution in this file!
const driver = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(myArr) {
    let newArray = myArr.slice(0,2)
    return newArray
}

function returnLastTwoDrivers(myArr) {
    let newArray = myArr.slice(myArr.length-2, myArr.length)
    return newArray
}
