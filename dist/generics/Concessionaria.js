"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mande = void 0;
var Concessionaria = /** @class */ (function () {
    function Concessionaria(endereco, listaDeCarros) {
        this.endereco = '';
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concessionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concessionaria.prototype.monstrarListaDeCarros = function () {
        // console.log('Lista de carros: \n -> ', this.listaDeCarros)
        return this.listaDeCarros;
    };
    //método da interface
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'De segunda a sexta das 8h00 as 18h00';
    };
    return Concessionaria;
}());
exports.default = Concessionaria;
exports.mande = 'lala';
