"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Pessoa_1 = require("./Pessoa");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
// criar carros
var carroA = new Carro_1.Carro('dodge', 2);
var carroB = new Carro_1.Carro('palio', 4);
var carroC = new Carro_1.Carro('monza', 4);
// montar a lista de carro da concessionaria
var listaDeCarros = [carroA, carroB, carroC];
// let listaDeCarros: Array<Carro> = [carroA, carroB, carroC]
var concessionaria = new Concessionaria_1.default('Rua Maria', listaDeCarros);
// exibir a lista de carros
console.log('lista de carros: \n', concessionaria.monstrarListaDeCarros());
// comprar o carro
var cliente = new Pessoa_1.Pessoa('João', 'palio');
console.log("\nCarro preferido: " + cliente.dizerCarroPreferido() + "\n");
concessionaria.monstrarListaDeCarros().map(function (carro) {
    // console.log(cliente.dizerCarroPreferido())
    if (carro['modelo'] === cliente.dizerCarroPreferido()) {
        // comprar o carro
        cliente.comprarCarro(carro);
    }
});
// console.log(`\n\n${cliente.dizerCarroQueTem()}\n\n`)
console.log(cliente.dizerCarroQueTem());
console.log(Carro_1.qualquer_coisa);
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
