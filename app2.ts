import { Carro, qualquer_coisa as x} from './Carro'
import { Pessoa } from './Pessoa'
import Concessionaria, {mande as y} from './Concessionaria'

// criar carros

let carroA = new Carro('dodge', 2)
let carroB = new Carro('palio', 4)
let carroC = new Carro('monza', 4)

// montar a lista de carro da concessionaria

let listaDeCarros: Carro[] = [ carroA, carroB, carroC ]
// let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Rua Maria', listaDeCarros)

// exibir a lista de carros

console.log('lista de carros: \n', concessionaria.monstrarListaDeCarros())


// comprar o carro

let cliente = new Pessoa('João', 'palio')

console.log(`\nCarro preferido: ${cliente.dizerCarroPreferido()}\n`)

concessionaria.monstrarListaDeCarros().map((carro: Carro) => {
  // console.log(cliente.dizerCarroPreferido())

  if (carro['modelo'] === cliente.dizerCarroPreferido()) {
    // comprar o carro
    cliente.comprarCarro(carro)
  }
})

// console.log(`\n\n${cliente.dizerCarroQueTem()}\n\n`)
console.log(cliente.dizerCarroQueTem())

console.log(x)




/* 

map() é um loop em cada posição do array
que dentro dela implementa um função de callback


let carroA = new Carro('gol', 2, 10)
console.log('Carro object: ', carroA)
carroA.acelera()
console.log('Carro object: ', carroA)

let concessionaria = new Concessionaria()

console.log(concessionaria)


let pessoa = new Pessoa('william', 'gol')
console.log('Instância de pessoa: ', pessoa) */