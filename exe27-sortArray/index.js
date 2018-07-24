function permutation(str) {
    var res = [];
    if (str != null && str.length > 0) {
        var seq = str.split('');
        seq.sort();
        res.push(seq.toString());
        var len = seq.length;
        while (true) {
            var p = len - 1, q;
            while (p >= 1 && seq[p - 1] >= seq[p]) --p;
            if (p == 0) break;
            q = p; --p;
            while (q < len && seq[q] > seq[p]) q++;
            --q;
            swap(seq, q, p);
            reverse(seq, p + 1);
            res.push(seq.toString());
        }
    }
    return res;
}
function reverse(seq, start) {
    var len = seq.length;
    if (seq === null || len <= start) return;
    for (var i = 0; i < ((len - start) >> 1); i++) {
        var p = start + i, q = len - 1 - i;
        if (p != q) swap(seq, p, q);
    }
}
function swap(cs, i, j) {
    var temp = cs[i];
    cs[i] = cs[j];
    cs[j] = temp;
}
//http://www.cnblogs.com/pmars/archive/2013/12/04/3458289.html