公司放映系统最近要上线一个『预定随机推荐电影』功能，每天用户通过系统预定名额，由系统每日推荐一部电影，按时推送到用户。现在，在系统已有如下异步方法封装的前提下
•    getTodayUsers ( callback ): 获取今日预定的用户id列表，使用如下 `getTodyUsers(userIds=>{ console.log(userIds )})`, 即回调中拿到用户id列表
•    getTodayMovie(callback): 获取今日推荐的电影id, 使用如下 `getTodayMovie( movieId=> {console.log(movieId )})` ，即回调中拿到今日的电影id
•    bookMovieForUsers(userIds, movieId, callback): 使用用户id列表预定某部电影，使用如下bookMovieForUsers([1,2,3], 1000, ()=>{console.log(‘预定成功了')})
请封装一个bookTodayMovieForTodayUser()的方法，它的作用是为今天预定的用户订阅今天系统推荐的电影。它返回一个promise, 这个promise在请求后被resolve. 使用方式如下
bookTodayMovieForTodayUser().then( ()=> console.log('预定成功’) )
注: 简单起见，所有情况都不需要考虑失败情况