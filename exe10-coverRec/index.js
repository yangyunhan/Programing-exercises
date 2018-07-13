/**
 * 思路：
 * （1）找规律
 * （2）横着放一块或者竖着放两块为单位，f(n) = f(n-1) + f(n-2)
 * 扩展
 * （1）1 * 3方块 覆盖3*n区域：f(n) = f(n-1) + f(n - 3)，(n > 3)
 * （2）1 * 4方块 覆盖4*n区域：f(n) = f(n-1) + f(n - 4)，(n > 4)
 * 更一般的结论，如果用1*m的方块覆盖m*n区域，递推关系式为f(n) = f(n-1) + f(n-m)，(n > m)。
 * @param {Number} number 
 * @param {Number} ac1 
 * @param {Number} ac2 
 */

function rectCover(number, ac1=1, ac2=2)
{
    if(number === 0){
        return 0
    }else if(number===1){
        return 1
    }else if(number===2){
        return ac2
    }else{
        return rectCover(number-1, ac2, ac1+ac2)
    }
}