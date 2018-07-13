console.log("You are so great at Javascript");

function go(direction, speed) {
    if (speed > 75) {
        console.log(`The car is moving ${direction} at ${speed} mph: Slow down`);
    }
    else 
    {
        console.log(`The car is moving ${direction}, at ${speed}`);
    }
}
go("forward", "25");
go("forward", "95");
go("forward", "85");
