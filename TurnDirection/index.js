function main(count, str) {
    var Larr = 0, Rarr = 0
    for (var i = 0; i < count; i++) {
        if (str[i] === 'L') {
            Larr++
        } else {
            Rarr++
        }
    }
    var result = Larr > Rarr ? 'L' : 'R'
    switch (Math.abs(Larr, Rarr) % 4) {
        case 0: {
            return 'N'
        }
        case 1: {
            return result === 'L' ? 'W' : 'E'
        }
        case 2: {
            return 'S'
            
        }
        case 3: {
            return result === 'L' ? 'E' : 'W'
            
        }
    }
}