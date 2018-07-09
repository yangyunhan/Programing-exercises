//判断一个数是否是质数
function isPrime(num){
    if(typeof num !== 'number' || !Number.isInteger(num)){
        return false
    }

    if(num===2){
        return 2
    }else if(num%2===0){
        return false
    }
    let squareRoot = Math.sqrt(num)
    for(let i = 3; i <= squareRoot; i+=2){
        if(num%i===0){
            return false
        }
    }
    return true
}

//正则
function isPrime(num){
    return !/^1?$|^(11+?)\1+$/.test(Array(num+1).join('1'))
}