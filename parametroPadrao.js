// estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 0
    b = b || 0
    c = c || 0
    return a + b + c
}

console.log(soma1(1, 2, 3))
console.log(soma1(1, 2, -1))
console.log(soma1(3))

// outra estrategia

function soma2(a=0, b=0, c=0){
    return a + b + c 
}

console.log(soma2(1, 2))
console.log(soma2(1))
console.log(soma2(1, 2, 6))