function setup()
{

	createCanvas(600, 600);
	x = 20;
	y = 20;
	
}  


function draw()
{
	background(255,255,255);

	fill(255,0,0);
	ellipse(x,y,20,20);
	x = x + 10;

	if (x > 450)
	{
		x = x - 17;
	}
}
