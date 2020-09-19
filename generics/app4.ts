// import { ConcessionariaDao } from './ConcessionariaDao'
// import { PessoaDao } from './PessoaDao'

import { Dao } from './Dao'

import Concessionaria from './Concessionaria'
import { Pessoa } from './Pessoa'

// let dao: ConcessionariaDao = new ConcessionariaDao()
// let doaPessoa: PessoaDao = new PessoaDao()


let concessionaria = new Concessionaria('', [])
let pessoa = new Pessoa('', '')

let daoGeneric: Dao<Concessionaria> = new Dao<Concessionaria>()
let daoGeneric2: Dao<Pessoa> = new Dao<Pessoa>()


daoGeneric.inserir(concessionaria)
daoGeneric2.remover(5)
// console.log(dao.inserir(concessionaria))
// console.log(doaPessoa.inserir(pessoa))

// fazer para classe carro e moto





