"use strict";
// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dao_1 = require("./Dao");
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var Pessoa_1 = require("./Pessoa");
// let dao: ConcessionariaDao = new ConcessionariaDao()
// let doaPessoa: PessoaDao = new PessoaDao()
var concessionaria = new Concessionaria_1.default('', []);
var pessoa = new Pessoa_1.Pessoa('', '');
var daoGeneric = new Dao_1.Dao();
var daoGeneric2 = new Dao_1.Dao();
daoGeneric.inserir(concessionaria);
daoGeneric2.remover(5);
// console.log(dao.inserir(concessionaria))
// console.log(doaPessoa.inserir(pessoa))
// fazer para classe carro e moto
