"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        console.log('logica inserir Pessoa');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    Dao.prototype.remover = function (id) {
        console.log('logica remover');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
