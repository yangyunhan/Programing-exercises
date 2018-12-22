//promise实现
function Promise(executor) {
    let self = this;
    self.value = undefined, self.reason = undefined, self.status = 'pending';
    self.onResolvedCallbacks = [], self.onRejectCallbacks = [];
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'resolved';
            self.onResolvedCallbacks.forEach(fn => fn());
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectCallbacks.forEach(fn => fn());
        }
    }
    try {
        executor(resolve, reject);
    } catch (e) {
        reject(e);
    }
}
Promise.prototype.then = function (onFulfilled, onRejected) {
    let self = this;
    if (self.status === 'resolved') {
        onFulfilled(self.value)
    }
    if (self.status === 'reject') {
        onRejected(self.reason)
    }
    if (self.status === 'pending') {
        self.onResolvedCallbacks.push(() => { onFulfilled(self.value) })
        self.onRejectCallbacks.push(() => { onRejected(self.reason) })
    }
}
//promise应用实例1
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
//promise延迟函数
var timeout1 = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});
//promise应用实例2
function red() { console.log('red') }
function green() { console.log('green') }
function yellow() { console.log('blue') }
var delay = function (timer, cb) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            cb();
            resolve()
        }, timer);
    })
}
var step = function () {
    Promise.resolve().then(function () {
        return delay(3000, red);
    }).then(function () {
        return delay(1000, green);
    }).then(function () {
        return delay(2000, yellow);
    }).then(function () {
        step();
    })
}
step();
//promise.all实现
Promise.all = (arr) => {
    let resultArr = [];
    return new Promise(function (resolve, reject) {
        let i = 0;
        function nextPro() {
            arr[i]().then(function (result) {
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