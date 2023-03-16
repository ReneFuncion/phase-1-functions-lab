// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation) {
    return Math.abs(pickUpLocation - 42);
}
function distanceFromHqInFeet(pickUpLocation) {
    return 264 * distanceFromHqInBlocks(pickUpLocation);
}
function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}
function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }


}