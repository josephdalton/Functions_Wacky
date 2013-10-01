//ask what color the end user prefers
var color = prompt ("What color do you prefer more, red or blue?")//finding the amount of jelly bellys to fill the entire area of a room!
//if statemnet blue
if(color == "blue"){
	//ask how wide the room is
var widthOfRoom = prompt ("How wide is the room?");
//get the hight of the room
var heightOfRoom =prompt ("How high is the room");
//get the total of the room
var total = calcArea(widthOfRoom, heightOfRoom);
}

//else if statement that does not equal blue
else if(color != "blue"){
var widthOfRoom = prompt ("How wide is the room?");
var heightOfRoom =prompt ("How high is the room");
var total = calcArea(widthOfRoom, heightOfRoom);

}

//ask how high the room is

//getting the total area of room the room


//set the function
// there are 3456 jelly bellys in a sq foot
function calcArea (widthOfRoom, heightOfRoom) {
	var area = widthOfRoom * heightOfRoom * 3456;
	return area;

}
 //set the alert for the total amount with the correct color of jely beans
alert("It would take " + total + " " + color + " Jelly Bellys to fill the entire room!")
console.log(total)
