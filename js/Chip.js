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


    this.chip.anchor.set(0.5, 0.5);


    this.chip.name = index.toString();

    game.physics.arcade.enable(this.chip, Phaser.Physics.ARCADE);
    this.chip.inputEnabled = true;
    this.chip.input.enableDrag(true, true);
    this.chip.events.onDragStart.add(pickUp, this);
    this.chip.events.onDragStop.add(putDown, this);


    this.chip.body.collideWorldBounds = true;
    this.chip.body.bounce.setTo(1, 1);

};

function pickUp() {

    this.chip.body.moves = false;
}

function putDown()   {
    this.chip.body.moves = true;
    game.physics.arcade.moveToXY(this.chip, this.x, this.y, 500, 100);
    setTimeout(function(){lockIn()}, 100);
}

function lockIn()   {
    this.chip.body.moves = false;
    this.chip.body.immovable = true;
}