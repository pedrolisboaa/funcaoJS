const pessoa = {
    saudacao: "Bom dia!",
    idade:27,
    saudar(){
        console.log(this.saudacao)
    },
    falarIdade(){
        console.log(`Então, eu tenho ${this.idade} anos!`)
    }

}

pessoa.saudar()
pessoa.falarIdade()

const saudar = pessoa.saudar.bind(pessoa)
saudar()
const falarIdade = pessoa.falarIdade.bind(pessoa)
falarIdade()