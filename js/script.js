//finding the amount of jelly bellys to fill the entire area of a room!
//ask how wide the room is
var widthOfRoom = prompt ("How wide is the room?");
//ask how high the room is
var heightOfRoom =prompt ("How high is the room");
//getting the total area of room the room
var total = calcArea(widthOfRoom, heightOfRoom);

//set the function
// there are 3456 jelly bellys in a sq foot
function calcArea (widthOfRoom, heightOfRoom) {
	var area = widthOfRoom * heightOfRoom * 3456;
	return area;

}
 
alert("It would take " + total +" Jelly Bellys to fill the entire room!")
console.log(total)