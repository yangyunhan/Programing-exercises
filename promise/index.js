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
