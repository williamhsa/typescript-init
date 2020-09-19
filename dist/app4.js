"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = require("./Pessoa");
var PessoaDao_1 = require("./PessoaDao");
var dao = new ConcessionariaDao_1.ConcessionariaDao();
var doaPessoa = new PessoaDao_1.PessoaDao();
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
console.log(dao.inserir(concessionaria));
console.log(doaPessoa.inserir(pessoa));
// fazer para classe carro e moto
