// Code your solution in this file!
const scuberHq = 42
let blocksTraveled;
let feetTraveled;
let fare;

function distanceFromHqInBlocks (pickup) {
    blocksTraveled = scuberHq > pickup ? scuberHq - pickup : pickup - scuberHq
    return blocksTraveled
}

function distanceFromHqInFeet (value) {
    const test = distanceFromHqInBlocks(value)
    return feetTraveled =  test * 264
}

function distanceTravelledInFeet (starting, ending){
    feetTraveled = starting > ending ? (starting - ending)*264 : (ending - starting)*264 
    return feetTraveled
}

function calculatesFarePrice (start,end) {
    if (distanceTravelledInFeet(start,end) < 400) {
        return fare = 0
    } else if (distanceTravelledInFeet(start,end) < 2000) {
        return fare = (distanceTravelledInFeet(start,end) - 400) * 0.02
    } else if (distanceTravelledInFeet(start,end) < 2500) {
        return fare = 25
    } else {
        return fare = "cannot travel that far"
    }
}

console.log(calculatesFarePrice(15, 20))




