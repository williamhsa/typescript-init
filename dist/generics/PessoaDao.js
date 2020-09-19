"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
var Pessoa_1 = require("./Pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log('logica inserir Pessoa');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log('logica atualizar');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log('logica remover');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log('logica selecionar');
        return new Pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log('logica selecionarTodos');
        return [new Pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
