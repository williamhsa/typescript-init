"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = require("./Carro");
var Moto_1 = require("./Moto");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro = new Carro_1.Carro('veloster', 3);
carro.acelerar();
var moto = new Moto_1.Moto();
moto.acelerar();
var concessionaria = new Concessionaria_1.default('', []);
console.log('Carro: ', carro);
console.log('\n\nMoto: ', moto);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
console.log('\n\n');
