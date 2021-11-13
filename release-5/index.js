//'e3' -> ['d1', 'c2', 'c4', 'd5', 'f5', 'g4', 'g2', 'f1'] 

const horseSteps = (cell) => {
    let lit = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    let directLit = [-2, -1, 1, 2]
    let directNum = [-1, 1, -2, 2]
    let num = [1, 2, 3, 4, 5, 6, 7, 8]
    let areaLit = []
    let areaNum = []
    let area = []
    let zadolbalas = []
    for (let i = 0; i < 8; i++) {
        if (cell[0] === lit[i]) {
            directLit.forEach(element => {
                areaLit.push(lit[i + element])
            });
        }
    }
    num.forEach((element, i) => {
        if (cell[1] === element.toString()) {
            directNum.forEach( item => {
                areaNum.push(num[i + item])
            })
        }
    })
    for (let i = 0; i < areaLit.length; i++) {
        if (areaLit[i] === undefined) {
            if (areaNum[i] === undefined) {
                continue
            }
            continue
        }
        switch(i) {
            case 0:
                area.push(areaLit[i] + areaNum[0])
                area.push(areaLit[i] + areaNum[1])
                continue
            case 1:
                area.push(areaLit[i] + areaNum[2])
                area.push(areaLit[i] + areaNum[3])
                continue
            case 2:
                area.push(areaLit[i] + areaNum[2])
                area.push(areaLit[i] + areaNum[3])
                continue
            case 3:
                area.push(areaLit[i] + areaNum[0])
                area.push(areaLit[i] + areaNum[1])
                continue
            }
        }
    for (let i = 0; i < area.length; i++) {
        if (!area[i].includes('undefined')) {
            zadolbalas.push(area[i])
        }
    }
    //return areaLit
    console.log(zadolbalas)
}

// console.log(horseSteps('b4'))
horseSteps('e3')
horseSteps('a1')
horseSteps('h8')