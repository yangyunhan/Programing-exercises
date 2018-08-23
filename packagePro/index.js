function main(K, A, X, B, Y) {
    var dp = [], p = []
    dp[0][0] = 1;
    for (var i = 1; i <= X; i++) {
        p[i] = A;
    }
    for (var j = X + 1; j <= X + Y; j++) {
        p[j] = B;
    }
    for (var i = 1; i <= X + Y; i++) {
        for (var j = 0; j <= K; j++) {
            if (j >= p[i])
                dp[i][j] = (dp[i - 1][j] % 1000000007 + dp[i - 1][j - p[i]] % 1000000007) % 1000000007;
            else
                dp[i][j] = dp[i - 1][j] % 1000000007;
        }
    }
    return dp[X + Y][K] % 1000000007;
}

var c = [];
var mod = 1000000007;
function init() {
    c = [];
    c[0] = []
    c[0][0] = 1;
    for (var i = 1; i <= 100; i++) {
        c[i] = []
        c[i][0] = 1
        for (var j = 1; j <= i - 1; j++) {
            c[i][j] = 0
            c[i][j] = (c[i - 1][j - 1] + c[i - 1][j]) % mod;
        }
        c[i][j] = 1
    }
}

function main(k, a, x, b, y) {
    var i, j, sum;
    init();
    sum = 0;
    if (a != b) {
        for (i = 0; i <= x; i++) {
            for (j = 0; j <= y; j++) {
                if ((i * a + j * b) > k) break;
                if ((i * a + j * b) == k) {
                    sum += c[x][i] * c[y][j];
                }
            }
        }
    }
    console.log(sum);
    return sum
}