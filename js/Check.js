

function checkHorizontal(color, row, col)  {

    var connected = 1;
    for (var i = 1; i < 4; i++) {
        if (col + i >= COLUMNS)
            break;
        if (color == grid[col + i][row].occupied) {
            connected++;
        }
        else
            break;
    }
    for (var i = 1; i < 4; i++)  {
        if (col - i < 0)
            break;
        if (color == grid[col - i][row].occupied) {
            connected++;
        }
        else
            break;
    }

    return connected >= 4;
}

function checkVertical(color, row, col)  {
    if (row >= 3) {
        return (color == grid[col][row - 1].occupied &&
                color == grid[col][row - 2].occupied &&
                color == grid[col][row - 3].occupied);
    }
    else return false;
}

function checkDiagonal(color, row, col) {

    //Top right to bottom left
    var connected = 1;
    for (var i = 1; i < 4; i++) {
        if (row + i >= ROWS || col + i >= COLUMNS)
            break;
        if (color == grid[col + i][row + i].occupied)   {
            connected++;
        }
        else
            break;
    }
    for (var i = 1; i < 4; i++) {
        if (row - i < 0 || col - i < 0)
            break;
        if (color == grid[col - i][row - i].occupied)   {
            connected++;
        }
        else
            break;
    }
    if (connected >= 4)
        return true;

    //Top left to bottom right
    connected = 1;
    for (var i = 1; i < 4; i++) {
        if (row - i < 0 || col + i >= COLUMNS)
            break;
        if (color == grid[col + i][row - i].occupied)   {
            connected++;
        }
        else
            break;
    }
    for (var i = 1; i < 4; i++) {
        if (row + i >= ROWS || col - i < 0)
            break;
        if (color == grid[col - i][row + i].occupied)   {
            connected++;
        }
        else
            break;
    }
    return connected >= 4;
}