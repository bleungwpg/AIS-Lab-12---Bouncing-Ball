function setup()
{

	createCanvas(600, 600);
	x = 20;  // create a variable x with a starting value of 20
	
}  


function draw()
{
	background(255,255,255);

	ellipse(x,100,20,20);
	
	x = x + 1;  // increase the value of x+1 each time
}
