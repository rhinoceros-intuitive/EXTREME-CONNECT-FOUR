Tile = function(x, y)	{

	var scaledx = BASEX + TILESIZE * x;
	var scaledy = BASEY - TILESIZE * y;
	this.occupied = false;
	this.y = y;

	this.tile = game.add.sprite(scaledx, scaledy, 'grid tile');

}