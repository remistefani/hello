var topValue = 0;
var leftValue = 0;
var sonicSpeed = 20;


function moveUp(image)
{
	topValue -= sonicSpeed;
	document.getElementById(image.id).style.top = topValue + "px";	
}

function moveDown(image)
{
	topValue += sonicSpeed;
	document.getElementById(image.id).style.top = topValue + "px";	
}

function moveLeft(image)
{
	leftValue -= sonicSpeed;
	document.getElementById(image.id).style.left = leftValue + "px";
	
}

function moveRight(image)
{
	leftValue += sonicSpeed;
	document.getElementById(image.id).style.left = leftValue + "px";
}
