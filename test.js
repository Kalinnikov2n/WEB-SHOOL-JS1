const findTheMostReapetedEls = (a) => {
    let count = 0
    let max = 0
    let num = []
    for (let i = 0;i < a.length;i++){
        for (let j = 0; j < a.length;j++){
            if (a[i] == a[j]){
                ++count
            }
        }
        if (count > max){
            max = count;
            num = []
            num[0] = a[i]

        }
        if (count == max){
            a.push(a[i])
        }

    }
    console.log(num)
}

findTheMostReapetedEls([1, 1, 1, 3, 4, 2, 2, 2])