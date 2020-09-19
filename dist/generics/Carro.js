"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = exports.Carro = void 0;
var Veiculo_1 = require("./Veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(modelo, numeroDePortas) {
        var _this = _super.call(this) || this;
        _this.numeroDePortas = 0;
        _this.modelo = modelo;
        _this.numeroDePortas = numeroDePortas;
        return _this;
    }
    return Carro;
}(Veiculo_1.Veiculo));
exports.Carro = Carro;
exports.qualquer_coisa = 'Teste';
/*
super()

Pois no construtor tem uma variavel trazida da classe pai, entao ajusta o contexto
Ela precisa ter um chamada para a função super().
O que acontece? a função super ela ajusta o contexto das variáveis
Em JS isso se torna necessário, pq a implementação da classe ela ocorre
atráves de prototypes, ou seja, não é um implementação de classes exatamente.
Por de trás dos panos, a implementação continua sendo de prototypes, então por isso
é necessario fazer esse ajuste de contexto.

Variavés PRIVADAS só podem ser alteradas a partir do proprio objeto, ou seja, mesmo que a classe
filha extenda essa classe pai que tem as variaveis privadas, ela nao pode ser alteradas. A
variavel modelo que vem de veiculo nao pode ser alterado, pq em veiculo ele é private.

para resolver isso utilizamos o PROTECTED,
  ele é semelhante ao private, a diferença, é que ele permite que classes filhas, fazem
  as alterações diretas  do valor das variaveis com essa visibilidade.

*/
/*
Antes usar herança

import { Pessoa } from './Pessoa'
import Concessionaria from './Concessionaria'

export class Carro {
  
  private modelo: string = ''
  private numeroDePortas: number = 0
  private velocidade: number = 0

  constructor(modelo: string, numeroDePortas: number) {
    this.modelo = modelo
    this.numeroDePortas = numeroDePortas
  }

  public acelerar(): void {
    this.velocidade = this.velocidade + 10
  }

  public parar(): void {
    this.velocidade = 0
  }

  public velocidadeAtual(): number {
    return this.velocidade
  }
}

export let qualquer_coisa: string = 'Teste'



*/ 
