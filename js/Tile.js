Tile = function(x, y)	{

	var scaledx = BASEX + TILESIZE * x;
	var scaledy = BASEY - TILESIZE * y;
	this.occupied = "empty";   //String representation of what color chip
	this.y = y;				   //is in the grid tile

	this.tile = game.add.sprite(scaledx, scaledy, 'grid tile');

}