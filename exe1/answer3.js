function Find(target, array)
{
    return array.some(arr=>arr.some(e=>e===target))
}
