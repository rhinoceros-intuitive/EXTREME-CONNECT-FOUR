var TILESIZE = 60;

var BASEX = (WIDTH - 7 * TILESIZE) / 2;
var BASEY = 360;

Tile = function(x, y)	{

	var scaledx = BASEX + TILESIZE * x;
	var scaledy = BASEY - TILESIZE * y;

	this.tile = game.add.sprite(scaledx, scaledy, 'grid tile');

}