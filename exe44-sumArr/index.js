function Sum_Solution(n) {
    return Math.round(1+n)*n/2
}

function Sum_Solution(n) {
    var ans = n;
    ans && (ans += Sum_Solution(n - 1));
    return ans;
}