//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

const horseSteps = (a) => {
    var b=[]
    var arr=[null,null,null,null,null,null,null,null,null,null,null,null,
             null,null,null,null,null,null,null,null,null,null,null,null,
             null,null,'a8','b8','c8','d8','e8','f8','g8','h8',null,null,
             null,null,'a7','b7','c7','d7','e7','f7','g7','h7',null,null,
             null,null,'a6','b6','c6','d6','e6','f6','g6','h6',null,null,
             null,null,'a5','b5','c5','d5','e5','f5','g5','h5',null,null,
             null,null,'a4','b4','c4','d4','e4','f4','g4','h4',null,null,
             null,null,'a3','b3','c3','d3','e3','f3','g3','h3',null,null,
             null,null,'a2','b2','c2','d2','e2','f2','g2','h2',null,null,
             null,null,'a1','b1','c1','d1','e1','f1','g1','h1',null,null,
             null,null,null,null,null,null,null,null,null,null,null,null,
             null,null,null,null,null,null,null,null,null,null,null,null,]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==a){
            if(arr[i-25]!==null){
                b.push(arr[i-25])
            }
            if(arr[i-14]!==null){
                b.push(arr[i-14])
            }
            if(arr[i-23]!==null){
                b.push(arr[i-23])
            }
            if(arr[i-10]!==null){
                b.push(arr[i-10])
            }
            if(arr[i+10]!==null){
                b.push(arr[i+10])
            }
            if(arr[i+23]!==null){
                b.push(arr[i+23])
            }
            if(arr[i+14]!==null){
                b.push(arr[i+14])
            }
            if(arr[i+25]!==null){
                b.push(arr[i+25])
            }
        }
    }
    console.log(b)
}
horseSteps('c5')