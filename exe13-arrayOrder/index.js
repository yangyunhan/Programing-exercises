
function reOrderArray(array)
{
    var len = array.length, oArr=[], jArr=[]
    for(var i=0;i<len;i++){
        if(array[i]%2===1){
            jArr.push(array[i])
        }else{
            oArr.push(array[i])
        }
    }
    return jArr.concat(oArr)
}