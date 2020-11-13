//criando de forma literal
function fun1(){}

// Armazenar uma função em uma variável 
const fun2 = function(){}

// Armazenar em array
const array = [function(a, b){return a + b}, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function(){return "Opa"}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun()
}