function setup()
{

	createCanvas(600, 400);
	x = 250;
	y = 21;

	moveR = 1;
	// moveR = 1 means moving right
	// moveR = 0 means moving left
}  


function draw()
{
	background(125,125,125);

	fill(255,0,0);
	ellipse(x,y,20,20);

	
	if (moveR == 1)
	{
		x = x + 4;
	}
	if (moveR == 0)
	{
		x = x - 5;
	}

	// when the x value of the ball reaches a maximum
	if (x > 590)
	{
		moveR = 0;
	}
	// when the x value of the ball reaches a minimum
	if (x < 10)
	{
		moveR = 1;
	}


}
