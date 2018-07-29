var cnt = 0
function InversePairs(array) {
    if (array != null) {
        mergeSortUp2Down(array, 0, array.length - 1)
    }
    return cnt
}
function mergeSortUp2Down(a, start, end) {
    if (start >= end) return;
    var mid = Math.floor((start + end)/2);
    mergeSortUp2Down(a, start, mid);
    mergeSortUp2Down(a, mid + 1, end);
    merge(a, start, mid, end);
    }
function merge(a, start, mid, end) {
    var tmp = [];
    var i = start, j = mid + 1, k = 0;
    while (i <= mid && j <= end) {
        if (a[i] <= a[j])
            tmp[k++] = a[i++];
        else {
            tmp[k++] = a[j++];
            cnt += mid - i + 1;
        }
    }
    while (i <= mid) {
        tmp[k++] = a[i++];
    }
    while (j <= end) {
        tmp[k++] = a[j++];
    }
    for (k = 0; k < tmp.length; k++) {
        a[start + k] = tmp[k];
    }
}