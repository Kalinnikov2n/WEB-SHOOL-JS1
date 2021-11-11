//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

arr = [['a1','a2','a3','a4','a5','a6','a7'],
['b1','b2','b3','b4','b5','b6','b7'],
['c1','c2','c3','c4','c5','c6','c7'],
['d1','d2','d3','d4','d5','d6','d7'],
['e1','e2','e3','e4','e5','e6','e7'],
['f1','f2','f3','f4','f5','f6','f7'],
['g1','g2','g3','g4','g5','g6','g7'],
['h1','h2','h3','h4','h5','h6','h7'],
];

result = []
// console.log(arr)
// console.log(arr[i-2][j-1],arr[i-2][j+1],arr[i-1][j-2],arr[i-1][j+2],arr[i+1][j-2],arr[i+1][j+2],arr[i+2][j-1],arr[i+2][j+1])
const horseSteps = (mesto) => {
    for (let i = 0; i < 8; i++ ){
        for (let j = 0; j < 8; j++ ){
            if (arr[i][j] == mesto){
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
