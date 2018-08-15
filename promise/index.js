function bookTodayMovieForTodayUser() {
    var getUsers = new Promise((resolve, reject) => {
        getTodyUsers(userIds => resolve(userIds))
    })
    var getMovies = new Promise((resolve, reject) => {
        getTodayMovie(movieId => resolve(movieId))
    })
    new Promise.all([getUsers, getMovies]).then(result => {
        bookTodayMovieForTodayUser(result[0], resolve[1], resolve)
    })
}
var timeout1 = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});
var ajax3 = () => timeout1(2000).then(() => {
    console.log('1');
    return 1;
});
var ajax4 = () => timeout1(1000).then(() => {
    console.log('2');
    return 2;
});
Promise.all = (arr) => {
    let resultArr = [];
    return new Promise(function(resolve, reject){
        let i = 0;
        function nextPro(){
            arr[i]().then(function(result) {
                resultArr.push(result);
                i++;
                if (i === arr.length) {
                    resolve(resultArr);
                } else {
                    nextPro();
                }
            })
        }
        nextPro()
    })
}
Promise.all([ajax3, ajax4])

function Npromise(){
    this.status = 'pending';
    var that = this;
    this.msg = ''
    var process = arguments[0];//function(resolve, reject){resolve('123')}
    process(function(){
        that.status = 'resolve'
        that.msg = arguments[0]//123
    }, function(){
        that.status = 'reject'
        that.msg = arguments[0]
    })
    return this
}
Npromise.prototype.then = function(){
    if(this.status === 'resolve'){
        arguments[0](this.msg)//arguments[0]:function(success){console.log(success);console.log('ok')};
    }
    if((this.status === 'reject') && (arguments[1])){
        arguments[1](this.msg)
    }
}
var mm=new Npromise(function(resolve,reject){
    resolve('123');
});
mm.then(function(success){
    console.log(success);
    console.log("ok!");
},function(){
    console.log('fail!');
});