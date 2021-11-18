//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 
const horseSteps = (pos) => 
{
    const board = [
        ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
        ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
        ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
        ['a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4'],
        ['a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5'],
        ['a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6'],
        ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
        ['a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8']
    ]
    const possibleSteps = [
        [-2, -1], [-1, -2], [ 1, -2], [ 2, -1], 
        [ 2,  1], [ 1,  2], [-1,  2], [-2,  1] 
    ]
    
    for(let i = 0; i < board.length; i++)
        for(let j = 0; j < board.length-1; j++)
            if (board[i][j] == pos) 
            {
                for (let m = 0; m < possibleSteps.length; m++)
                    if(i+possibleSteps[m][0] < 8 && i+possibleSteps[m][0] >= 0 && j+possibleSteps[m][1] < 8 && j+possibleSteps[m][1] >= 0)
                        console.log(board[i+possibleSteps[m][0]][j+possibleSteps[m][1]]);
            }
}
horseSteps('a1');