//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

 const horseSteps = (posit) => {
    for (let i = 0; i < 8; i++ ){
        for (let j = 0; j < 8; j++ ){
            if (arr[i][j] == posit){
                // console.log(arr[i-2][j-1],arr[i-2][j+1],arr[i-1][j-2],arr[i-1][j+2],arr[i+1][j-2],arr[i+1][j+2],arr[i+2][j-1],arr[i+2][j+1])
                if (typeof arr[i-2][j-1] != "undefined"){
                    result.push(arr[i-2][j-1])
                }
                if (typeof arr[i-2][j+1] != "undefined"){
                    result.push(arr[i-2][j+1])
                }
                if (typeof arr[i-1][j-2] != "undefined"){
                    result.push(arr[i-1][j-2])
                }
                if (typeof arr[i-1][j+2] != "undefined"){
                    result.push(arr[i-1][j+2])
                }
                if (typeof arr[i+1][j-2] != "undefined"){
                    result.push(arr[i+1][j-2])
                }
                if (typeof arr[i+1][j+2] != "undefined"){
                    result.push(arr[i+1][j+2])
                }
                if (typeof arr[i+2][j-1] != "undefined"){
                    result.push(arr[i+2][j-1])
                }
                if (typeof arr[i+2][j+1] != "undefined"){
                    result.push(arr[i+2][j+1])
                }
                console.log(result)
            }
        }
    }
}
horseSteps("e3")