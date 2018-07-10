//v1
function sleep(sleepTime) {
    for (let start = +new Date(); +new Date() - start <= sleepTime;) { }
}
const t1 = +new Date()
sleep(3000)
const t2 = +new Date()
console.log(t2 - t1)

//v2-promise
function sleep(sleepTime) {
    return new Promise(resolve => {
        setTimeout(resolve, sleepTime)
    })
}
const t1 = +new Date()
sleep(3000).then(() => {
    const t2 = +new Date()
    console.log(t2 - t1)
})

//v3-async-await es7
function sleep(sleepTime) {
    return new Promise(resolve => setTimeout(resolve, sleepTime))
}
!async function test() {
    const t1 = +new Date()
    await sleep(3000)
    const t2 = +new Date()
    console.log(t2 - t1)
}