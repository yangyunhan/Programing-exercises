//获取链接里面的值
//https://www.baidu.com?name=jawil&age=23中name的value值
//非正则实现
function getParamName(attr){
    let search = window.location.search//?name=jawil&age=23
    let param_str = search.split('?')[1]//name=jawil&age=23
    let param_arr = param_str.split('&')//['name=jawil','age=23']
    let filter_arr = param_arr.filter(ele => {//['name=jawil']
        return ele.split('=')[0] === attr
    })
    return decodeURIComponent(filter_arr[0].split('=')[1])
}
//正则实现
function getParamNameByExp(attr){
    let match = RegExp(`[?&]${attr}=([^&]*)`).exec(window.location.search)
    //['?name=jawil','jawil',index:0,input:'?name=jawil&age=23']
    return match && decodeURIComponent(match[1].replace(/\+/g,' '))
}
