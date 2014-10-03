//Recursive function that allows chips to drop to the lowest spot.
//LoadTexture updates the sprite image for the designated grid.
function reddrop(row, col) {
        if (row > 0)    {
            if (grid[col][row - 1].occupied)    {
                grid[col][row].tile.loadTexture('red placed');
                grid[col][row].occupied = true;
                return 1;
            }
            else    {
                return reddrop(row - 1, col);
            }
        }
        else    {
            grid[col][row].tile.loadTexture('red placed');
            grid[col][row].occupied = true;
            return 1;
        }
    }

function blackdrop(row, col) {
        if (row > 0)    {
            if (grid[col][row - 1].occupied)    {
                grid[col][row].tile.loadTexture('black placed');
                grid[col][row].occupied = true;
                return 1;
            }
            else    {
                return blackdrop(row - 1, col);
            }
        }
        else    {
            grid[col][row].tile.loadTexture('black placed');
            grid[col][row].occupied = true;
            return 1;
        }
    }