 GameChip = function (index, game, color) {

    var x = 200 + index * 200;
    var y = 500;

    this.number = index;
    this.game = game;
    this.active = false;
    this.x = x;
    this.y = y;

    this.chip;

    if (color)  {
        this.chip = game.add.sprite(x, y, 'redchip');
    }
    else    {
        this.chip = game.add.sprite(x, y, 'blackchip');
    }



/* Sets up the chip to be interactive with the Phaser physics environment*/

    this.chip.anchor.set(0.5, 0.5);
    this.chip.name = index.toString();
    game.physics.enable(this.chip, Phaser.Physics.ARCADE);

/* Adds drag functionality for the chip*/

    this.chip.inputEnabled = true;
    this.chip.input.enableDrag(true, true);
    this.chip.events.onDragStart.add(pickUp, this);
    this.chip.events.onDragStop.add(putDown, this);

};

function pickUp() {

    this.chip.body.moves = false;
}

function putDown()   {

    this.chip.body.reset();
    this.chip.x = 200 + this.number * 200;
    this.chip.y = 500;

}

