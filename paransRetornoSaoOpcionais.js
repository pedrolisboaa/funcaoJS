function area(altura, largura){
    const area = altura * largura
    if (area > 20){
        console.log(`Area de ${area} maior que o permitido.`)
    }else{
        return area
    }
}

console.log(area(2,2))
console.log(area(5,5))
console.log(area(10,1))