//Recursive function that allows chips to drop to the lowest spot.
//LoadTexture updates the sprite image for the designated grid.
function redDrop(row, col) {
        if (row > 0)    {
            if (grid[col][row - 1].occupied)    {
                grid[col][row].tile.loadTexture("redplaced");
                grid[col][row].occupied = true;
                return 1;
            }
            else    {
                return redDrop(row - 1, col);
            }
        }
        else    {
            grid[col][row].tile.loadTexture("redplaced");
            grid[col][row].occupied = true;
            return 1;
        }
    }

function blackDrop(row, col) {
        if (row > 0)    {
            if (grid[col][row - 1].occupied)    {
                grid[col][row].tile.loadTexture("blackplaced");
                grid[col][row].occupied = true;
                return 1;
            }
            else    {
                return blackDrop(row - 1, col);
            }
        }
        else    {
            grid[col][row].tile.loadTexture("blackplaced");
            grid[col][row].occupied = true;
            return 1;
        }
    }