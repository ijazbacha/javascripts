
// add and sub are callback function

function add(a,b){
    return a + b
}

function sub(a,b){
    return a - b
}

// calculator is highorder function

function calculator(a, b, oper){
    return oper(a,b)
}

cal = calculator(1,2,add)
console.log(cal)