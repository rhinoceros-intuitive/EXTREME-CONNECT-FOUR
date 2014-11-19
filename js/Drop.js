//Recursive function that allows chips to drop to the lowest spot.
//LoadTexture updates the sprite image for the designated grid.
function basicDrop(color, row, col) {

    //Create a string that will be named either "redplaced" or "blackplaced"
    //These are the aliases of the images that must be loaded when a chip
    //is placed
    
    var img = color.concat("placed");
    //Drop down recursively until the chip lands on either the bottom of
    //the grid or another chip.

    if (row > 0)    {
        var win = false;
        if (grid[col][row - 1].occupied != "empty")    {
            grid[col][row].tile.loadTexture(img);
            grid[col][row].occupied = color;

            if (checkHorizontal(color, row, col)
            ||  checkVertical(color, row, col)
            ||  checkDiagonal(color, row, col)) {

                winner = color;

            }

            return row;
        }
        else    {
            return basicDrop(color, row - 1, col);
        }
    }
    else    {
        grid[col][row].tile.loadTexture(img);
        grid[col][row].occupied = color;

        if (checkHorizontal(color, row, col)
        ||  checkVertical(color, row, col)
        ||  checkDiagonal(color, row, col)) {

            winner = color;

        }

        return row;
    }
}

