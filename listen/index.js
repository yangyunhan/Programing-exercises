function listen(container, selector, eventType, fn) {
    container.addEventListener(eventType, e => {
        var el = e.target
        while (!el === selector) {
            if (container === el) {
                el = null
                break
            }
            el = el.parentNode
        }
        el && fn.call(el, e, el)
    })
    return container
}