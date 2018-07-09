function render(str, obj){
    return str.replace(/\{\{(.*?)\}\}/g, (match, key) => obj[key])
}

function render(str, obj){
    return str.replace(/\{\{(.*?)\}\}/g, (match, key) => obj[key.trim()])
}