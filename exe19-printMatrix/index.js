/**
 * 思路：结合矩阵四角的坐标，观察每次取值的规律
 * @param {Object} matrix 
 */
function printMatrix(matrix)
{
    var row = matrix.length, column = matrix[0].length
    var left = 0, right = column - 1, top = 0, bottom = row - 1
    var result = []
    if(row===0 && column===0){
        return result
    }
    if(row===1 && column===1){
        result.push(matrix[0][0])
        return result
    }
    while(left <= right && top <= bottom){
        for(var i=left; i <=right; i++){
            result.push(matrix[top][i])
        }
        if(top!==bottom){
            for(var i = top+1; i <= bottom; i++){
                result.push(matrix[i][right])
            }
        }
        if(top!==bottom){
            for(var i = right-1; i >= left; i--){
                result.push(matrix[bottom][i])
            }
        }
        if(left!==right){
            for(var i=bottom-1; i > top; i--){
                result.push(matrix[i][left])
            }
        }
        left++, top++, right--, bottom--
    }
    return result
}
var matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
printMatrix(matrix)

/**
 * 思路：每次取出第一行的值，去掉第一行，把剩下的矩阵逆时针90度得到新矩阵，继续取矩阵的第一行
 */