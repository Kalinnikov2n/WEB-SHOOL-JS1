//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

const horseSteps = (pos) => {
    let str= " abcdefghij" //h -конец доски
    let coord = pos.split("");
    let turns = [];
    let turn = "";
    coord[0]=str.indexOf(coord[0])
    coord[1]=Number(coord[1])
    if(coord[0]+1<=8){
        if(coord[1]+2<=8){
            turn = str[coord[0]+1]+(coord[1]+2);
            turns.push(turn);
        }
        if(coord[1]-2>=1){
            turn = str[coord[0]+1]+(coord[1]-2);
            turns.push(turn);
        }
        if(coord[0]+2<=8){
            if(coord[1]+1<=8){
                turn = str[coord[0]+2]+(coord[1]+1);
                turns.push(turn);
            }
            if(coord[1]-1>=1){
                turn = str[coord[0]+2]+(coord[1]-1);
                turns.push(turn);
            }
        }
    }
    if(coord[0]-1<=8){
        if(coord[1]+2<=8){
            turn = str[coord[0]-1]+(coord[1]+2);
            turns.push(turn);
        }
        if(coord[1]-2>=1){
            turn = str[coord[0]-1]+(coord[1]-2);
            turns.push(turn);
        }
        if(coord[0]-2<=8){
            if(coord[1]+1<=8){
                turn = str[coord[0]-2]+(coord[1]+1);
                turns.push(turn);
            }
            if(coord[1]-1>=1){
                turn = str[coord[0]-2]+(coord[1]-1);
                turns.push(turn);
            }
        }
    }
    console.log(turns)
}