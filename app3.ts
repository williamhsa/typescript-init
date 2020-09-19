import { Carro } from './Carro'
import { Veiculo } from './Veiculo'
import { Moto } from './Moto'
import Concessionaria from './Concessionaria'


let carro = new Carro('veloster', 3)
carro.acelerar()

let moto = new Moto()
moto.acelerar()

let concessionaria = new Concessionaria('', [])

console.log('Carro: ', carro)
console.log('\n\nMoto: ', moto)

console.log(concessionaria.fornecerHorariosDeFuncionamento())


console.log('\n\n')

